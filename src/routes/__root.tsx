import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { ThemeToggle } from '@/components/theme-toggle';
import { ApplicationProvider } from '@/providers/applicationProvider';

const RootLayout = () => (
	<ApplicationProvider>
		<div className="w-1/2 mx-auto">
			<div className="flex items-center py-4 justify-between">
				<div className="flex items-center gap-4">
					<Link to="/" className="[&.active]:font-medium">
						Home
					</Link>
					<Link to="/about" className="[&.active]:font-medium">
						About
					</Link>
				</div>
				<ThemeToggle />
			</div>
			<Outlet />
		</div>
	</ApplicationProvider>
);

export const Route = createRootRoute({ component: RootLayout });
