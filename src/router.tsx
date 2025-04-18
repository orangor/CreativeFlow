import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import KeywordsPage from './pages/KeywordsPage';
import TitlePage from './pages/TitlePage';
import ContentPage from './pages/ContentPage';
import ScriptPage from './pages/ScriptPage';
import ShootingPage from './pages/ShootingPage';
import EditingPage from './pages/EditingPage';
import HomePage from './pages/HomePage';

// 创建路由配置
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'tasks/keywords', element: <KeywordsPage /> },
      { path: 'tasks/title', element: <TitlePage /> },
      { path: 'tasks/content', element: <ContentPage /> },
      { path: 'tasks/script', element: <ScriptPage /> },
      { path: 'tasks/shooting', element: <ShootingPage /> },
      { path: 'tasks/editing', element: <EditingPage /> },
    ],
  },
]);

export default router;