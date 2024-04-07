import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./ui/Spinner";
import './index.css';
import '@radix-ui/themes/styles.css';
import Error from "./ui/Error";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./Pages/DashBoard";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminUser from "./Pages/AdminUser";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminRoute from "./Features/authentication/AdminRoute";
import Calender from "./ui/Calender";
const Home = lazy(() => import("./Pages/Home"));





const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
});

const router = createBrowserRouter([
  {
    element: <Home />,
    errorElement: <Error />,
    path: '/'
  },
  {
    element: <Calender />,
    errorElement: <Error />,
    path: '/calendar'
  },
  {
    element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
    errorElement: <Error />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },

    ]
  },
  {
    element: <AdminRoute><AdminLayout /></AdminRoute>,
    errorElement: <Error />,
    children: [
      {
        path: '/admin',
        element: <AdminDashboard />
      },
      {
        path: '/admin/:userId',
        element: <AdminUser />
      },


    ]
  }
]);

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>

      <ReactQueryDevtools initialIsOpen={false} />

      <Suspense fallback={<Spinner />} >
        <RouterProvider router={router} />
      </Suspense>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#374151",
          },
        }}
      />

    </QueryClientProvider>
  );
};

export default App;