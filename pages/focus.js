import Head from 'next/head';
import { useState } from 'react';
import FocusSession from '../components/FocusSession';

export default function Focus() {
    const [showTips, setShowTips] = useState(true);

    return (
        <>
            <Head>
                <title>Focus Session | FocusFast</title>
                <meta name="description" content="Build your focus with scientific methods" />
            </Head>

            <main className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    Start Your Focus Session
                </h1>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <FocusSession />
                    </div>

                    {showTips && (
                        <div className="bg-neutral text-neutral-content p-6 rounded-xl">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-bold">Focus Tips</h2>
                                <button
                                    className="btn btn-sm btn-ghost"
                                    onClick={() => setShowTips(false)}
                                >
                                    ✕
                                </button>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-primary">1.</span>
                                    <span>Find a quiet space with minimal visual distractions</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">2.</span>
                                    <span>Put your phone in another room or use Do Not Disturb</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">3.</span>
                                    <span>Set a clear, specific goal for your focus session</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">4.</span>
                                    <span>Keep water nearby to stay hydrated</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">5.</span>
                                    <span>Use the ambient sounds to mask distracting noises</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
