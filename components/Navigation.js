import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
    const router = useRouter();

    // Navigation items
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Focus Session', path: '/focus' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Settings', path: '/settings' }
    ];

    return (
        <nav className="bg-base-100 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/">
                                <span className="text-xl font-bold text-primary">FocusFast</span>
                            </Link>
                        </div>

                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            {navItems.map((item) => (
                                <Link
                                    href={item.path}
                                    key={item.name}
                                    className={`px-3 py-2 rounded-md text-sm font-medium ${router.pathname === item.path
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-base-content hover:bg-base-200'
                                        } mx-1`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Link
                            href="/focus"
                            className="bg-primary hover:bg-primary-focus text-primary-content px-4 py-2 rounded-md text-sm font-medium hidden md:block"
                        >
                            Start Focus Session
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <button className="btn btn-ghost btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="sm:hidden hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            href={item.path}
                            key={item.name}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${router.pathname === item.path
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-base-content hover:bg-base-200'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
