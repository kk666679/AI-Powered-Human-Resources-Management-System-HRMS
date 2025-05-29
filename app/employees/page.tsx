// app/employees/page.tsx
import { Button } from '@radix-ui/themes';

export default function EmployeesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Employee Management</h1>
          <p className="text-gray-600 mt-2">
            Manage your workforce efficiently with AI-powered tools
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Employee Directory Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Employee Directory</h2>
            {/* Directory components */}
          </div>
          
          {/* Performance Management Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Performance Management</h2>
            {/* Performance components */}
          </div>
          
          {/* Leave Management Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Leave Management</h2>
            {/* Leave management components */}
          </div>
        </div>
        {/* <Button>Click me</Button> */}
      </div>
    </div>
  );
}
