import { Button } from '@radix-ui/themes';
import { Slot } from "@radix-ui/react-slot";
import { NextRequest, NextResponse } from 'next/server';
import { getEmployees, createEmployee } from '@/lib/employee-service';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const department = searchParams.get('department');
    const employees = await getEmployees(department || undefined);
    return NextResponse.json(employees);
  } catch (error) {
    console.error('Failed to fetch employees:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const employeeData = await req.json();
    // Validation would go here
    const newEmployee = await createEmployee(employeeData);
    return NextResponse.json(newEmployee, { status: 201 });
  } catch (error) {
    console.error('Failed to create employee:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}