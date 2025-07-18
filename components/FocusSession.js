import { useState, useEffect, useRef } from 'react';

const FocusSession = () => {
    // Session configuration
    const [sessionConfig, setSessionConfig] = useState({
        focusDuration: 25, // minutes
        breakDuration: 5, // minutes
        longBreakDuration: 15, // minutes
        sessionsBeforeLongBreak: 4,
        ambientSound: 'none', // none, whitenoise, nature, lofi
        blockNotifications: true,
    });

    // Session state
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [mode, setMode] = useState('focus'); // focus, break, longBreak
    const [timeLeft, setTimeLeft] = useState(sessionConfig.focusDuration * 60);
    const [completedSessions, setCompletedSessions] = useState(0);
    const [sessionStats, setSessionStats] = useState({
        totalFocusTime: 0,
        sessionsCompleted: 0,
        currentStreak: 0,
    });

    // Audio refs
    const audioRef = useRef(null);
    const notificationRef = useRef(null);

    // Timer effect
    useEffect(() => {
        let interval = null;

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTimeLeft((timeLeft) => {
                    if (timeLeft <= 1) {
                        clearInterval(interval);
                        handleTimerComplete();
                        return 0;
                    }
                    return timeLeft - 1;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, isPaused]);

    // Initialize timer based on mode
    useEffect(() => {
        if (mode === 'focus') {
            setTimeLeft(sessionConfig.focusDuration * 60);
        } else if (mode === 'break') {
            setTimeLeft(sessionConfig.breakDuration * 60);
        } else if (mode === 'longBreak') {
            setTimeLeft(sessionConfig.longBreakDuration * 60);
        }
    }, [mode, sessionConfig]);

    // Play ambient sound on session start or when sound changes
    const playAmbientSound = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.muted = false;
            audioRef.current.load(); // Ensure the new source is loaded
            audioRef.current.play().then(() => {
                console.log("Ambient sound started");
            }).catch((error) => {
                console.log("Ambient sound play failed:", error);
            });
        }
    };

    // Pause ambient sound
    const pauseAmbientSound = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            console.log("Ambient sound paused");
        }
    };

    // Handle ambient sound on session state changes
    useEffect(() => {
        if (sessionConfig.ambientSound !== 'none' && isActive && !isPaused) {
            playAmbientSound();
        } else {
            pauseAmbientSound();
        }
        // eslint-disable-next-line
    }, [sessionConfig.ambientSound, isActive, isPaused]);

    // Handle timer completion
    const handleTimerComplete = () => {
        if (notificationRef.current) {
            notificationRef.current.play().catch(error => {
                console.log("Notification sound failed:", error);
            });
        }

        if (mode === 'focus') {
            // Update stats
            setSessionStats(prev => ({
                totalFocusTime: prev.totalFocusTime + sessionConfig.focusDuration,
                sessionsCompleted: prev.sessionsCompleted + 1,
                currentStreak: prev.currentStreak + 1,
            }));

            setCompletedSessions(prev => prev + 1);

            // Determine if it's time for a long break
            if (completedSessions + 1 >= sessionConfig.sessionsBeforeLongBreak) {
                setMode('longBreak');
                setCompletedSessions(0);
            } else {
                setMode('break');
            }
        } else {
            // After break, return to focus mode
            setMode('focus');
        }
    };

    // Format time as MM:SS
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Calculate progress percentage
    const calculateProgress = () => {
        const totalSeconds = mode === 'focus'
            ? sessionConfig.focusDuration * 60
            : mode === 'break'
                ? sessionConfig.breakDuration * 60
                : sessionConfig.longBreakDuration * 60;

        return 100 - ((timeLeft / totalSeconds) * 100);
    };

    return (
        <div className="bg-base-200 p-6 rounded-xl max-w-md mx-auto shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
                {mode === 'focus' ? 'Focus Session' : mode === 'break' ? 'Short Break' : 'Long Break'}
            </h2>

            {/* Timer Display */}
            <div className="relative h-48 w-48 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="text-base-300 stroke-current"
                        strokeWidth="4"
                        cx="50"
                        cy="50"
                        r="45"
                        fill="transparent"
                    ></circle>

                    <circle
                        className={`${mode === 'focus' ? 'text-primary' : 'text-secondary'} stroke-current`}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="283"
                        strokeDashoffset={283 - (283 * calculateProgress() / 100)}
                        cx="50"
                        cy="50"
                        r="45"
                        fill="transparent"
                    ></circle>
                </svg>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <span className="text-4xl font-bold">{formatTime(timeLeft)}</span>
                </div>
            </div>

            {/* Session Controls */}
            <div className="flex justify-center gap-4 mb-6">
                {!isActive ? (
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            setIsActive(true);
                            setIsPaused(false);
                            if (sessionConfig.ambientSound !== 'none') {
                                setTimeout(playAmbientSound, 0); // Ensure play after state updates
                            }
                        }}
                    >
                        Start Session
                    </button>
                ) : isPaused ? (
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsPaused(false)}
                    >
                        Resume
                    </button>
                ) : (
                    <button
                        className="btn btn-outline"
                        onClick={() => setIsPaused(true)}
                    >
                        Pause
                    </button>
                )}

                <button
                    className="btn btn-outline btn-error"
                    onClick={() => {
                        setIsActive(false);
                        setIsPaused(false);
                        setMode('focus');
                        setTimeLeft(sessionConfig.focusDuration * 60);
                    }}
                >
                    Reset
                </button>
            </div>

            {/* Session Progress */}
            <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                    <span>Session Progress</span>
                    <span>{completedSessions} / {sessionConfig.sessionsBeforeLongBreak}</span>
                </div>
                <progress
                    className="progress progress-primary w-full"
                    value={completedSessions}
                    max={sessionConfig.sessionsBeforeLongBreak}
                ></progress>
            </div>

            {/* Settings */}
            <div className="mb-4">
                <h3 className="font-semibold mb-2">Session Settings</h3>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="label">Focus Duration</label>
                        <select
                            className="select select-bordered w-full"
                            value={sessionConfig.focusDuration}
                            onChange={(e) => setSessionConfig({
                                ...sessionConfig,
                                focusDuration: parseInt(e.target.value)
                            })}
                            disabled={isActive}
                        >
                            <option value="15">15 minutes</option>
                            <option value="25">25 minutes</option>
                            <option value="45">45 minutes</option>
                            <option value="60">60 minutes</option>
                        </select>
                    </div>

                    <div>
                        <label className="label">Break Duration</label>
                        <select
                            className="select select-bordered w-full"
                            value={sessionConfig.breakDuration}
                            onChange={(e) => setSessionConfig({
                                ...sessionConfig,
                                breakDuration: parseInt(e.target.value)
                            })}
                            disabled={isActive}
                        >
                            <option value="5">5 minutes</option>
                            <option value="10">10 minutes</option>
                            <option value="15">15 minutes</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Sound Options */}
            <div className="mb-4">
                <h3 className="font-semibold mb-2">Ambient Sound</h3>
                <div className="flex flex-wrap gap-2">
                    {['none', 'whitenoise', 'nature', 'lofi'].map(sound => (
                        <button
                            key={sound}
                            className={`btn btn-sm ${sessionConfig.ambientSound === sound ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => {
                                setSessionConfig({ ...sessionConfig, ambientSound: sound });
                                // Play the new sound immediately if session is active and not paused
                                setTimeout(() => {
                                    if (sound !== 'none' && isActive && !isPaused) {
                                        playAmbientSound();
                                    } else {
                                        pauseAmbientSound();
                                    }
                                }, 0);
                            }}
                        >
                            {sound.charAt(0).toUpperCase() + sound.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Distraction Blocking */}
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Block Notifications</span>
                    <input
                        type="checkbox"
                        checked={sessionConfig.blockNotifications}
                        onChange={() => setSessionConfig({
                            ...sessionConfig,
                            blockNotifications: !sessionConfig.blockNotifications
                        })}
                        className="toggle toggle-primary"
                        disabled={isActive}
                    />
                </label>
            </div>

            {/* Stats */}
            {sessionStats.sessionsCompleted > 0 && (
                <div className="mt-6 p-4 bg-base-300 rounded-lg">
                    <h3 className="font-semibold mb-2">Today's Progress</h3>
                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                            <p className="text-2xl font-bold text-primary">{sessionStats.sessionsCompleted}</p>
                            <p className="text-xs">Sessions</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">{sessionStats.totalFocusTime}</p>
                            <p className="text-xs">Minutes</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">{sessionStats.currentStreak}</p>
                            <p className="text-xs">Streak</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Hidden Audio Elements */}
            <audio
                ref={audioRef}
                loop
                preload="auto"
                src={sessionConfig.ambientSound !== 'none' ? `/sounds/${sessionConfig.ambientSound}.mp3` : undefined}
            />

            <audio ref={notificationRef}>
                <source src="/sounds/notification.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
};

export default FocusSession;
