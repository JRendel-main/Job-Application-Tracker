import DashboardCard from '@/components/DashboardCard';
import Layout from '@/components/Layout'
import TableRows from '@/components/TableRows';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent } from '@radix-ui/react-dropdown-menu';
import { BriefcaseIcon, CalendarIcon, ClockIcon, Edit2Icon, FilterIcon, GiftIcon, Trash2Icon } from 'lucide-react';
import React from 'react'
import JobApplication from '@/types/JobApplication';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const dashboardData = [
  {
    title: "Total Applications",
    icon: <BriefcaseIcon className="w-6 h-6 text-primary" />,
    value: 52
  },
  {
    title: "Pending Applications",
    icon: <ClockIcon className="w-6 h-6 text-primary" />,
    value: 10
  },
  {
    title: "Interviews Scheduled",
    icon: <CalendarIcon className="w-6 h-6 text-primary" />,
    value: 5
  },
  {
    title: "Offers Recieved",
    icon: <GiftIcon className="w-6 h-6 text-primary" />,
    value: 3
  }
]

const index = () => {
  return (
    <div>
      <Layout>
        <div className="flex justify-center gap-5 items-center">
          <div className="flex-1">
            <div className="grid grid-cols-4 gap-6">
              {dashboardData.map((data, index) => {
                return (
                  <DashboardCard
                    key={index}
                    title={data.title}
                    icon={data.icon}
                    value={data.value}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-10">
          <Card>
            <CardHeader className="flex items-center justify-between pb-2 px-3">
              <CardTitle>Application Lists</CardTitle>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 text-sm"
                  >
                    <Edit2Icon className="w-4 h-4" />
                    <span>Add Application</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Add new application</SheetTitle>
                    <SheetDescription>
                      Fill in the details of the application you want to add.
                    </SheetDescription>
                    <div className="grid gap-4 py-4">
                      <div className="flex flex-col items-start gap-3">
                        <Label htmlFor="company" className="text-right">
                          Company Name:
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Enter company name here"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-3">
                        <Label htmlFor="role" className="text-right">
                          Role:
                        </Label>
                        <Input
                          id="role"
                          type="text"
                          placeholder="Enter role here"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-3">
                        <Label htmlFor="date" className="text-right">
                          Date:
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          placeholder="Enter date here"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-3">
                        <Label htmlFor="type" className="text-right">
                          Type:
                        </Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Remote">Remote</SelectItem>
                            <SelectItem value="On-site">On-site</SelectItem>
                            <SelectItem value="Hybrid">Hybrid</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col items-start gap-3">
                        <Label htmlFor="platform" className="text-right">
                          Platform:
                        </Label>
                        <Input
                          id="platform"
                          type="text"
                          placeholder="Enter platform here"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-3">
                        <Label htmlFor="link" className="text-right">
                          Link:
                        </Label>
                        <Input
                          id="link"
                          type="text"
                          placeholder="Enter link here"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-3">
                        <Label htmlFor="location" className="text-right">
                          Location:
                        </Label>
                        <Input
                          id="location"
                          type="text"
                          placeholder="Enter location here"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-3">
                        <Label htmlFor="status" className="text-right">
                          Status:
                        </Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Applied">Applied</SelectItem>
                            <SelectItem value="Scheduled">Interview Scheduled</SelectItem>
                            <SelectItem value="Offered">Offered</SelectItem>
                            <SelectItem value="Rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        <Trash2Icon className="w-4 h-4" />
                        <span>Cancel</span>
                      </Button>
                      <Button variant="default" size="sm">
                        <GiftIcon className="w-4 h-4" />
                        <span>Add Application</span>
                      </Button>
                      </div>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
              <div className="flex items-center gap-2 mt-5">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={"outline"}
                      size="sm"
                      className="h-7 gap-1 text-sm"
                    >
                      <FilterIcon className="w-4 h-4" />
                      <span>Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      In Progress
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Applied</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Interviewed
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Offered</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={"outline"}
                      size="sm"
                      className="h-7 gap-1 text-sm"
                    >
                      <ClockIcon className="w-4 h-4" />
                      <span>Sort</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="p-4">
                    <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Date
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Company</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Status</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Date Applied</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Platform</TableHead>
                    <TableHead>Job Listing Link</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {JobApplication.map(
                    (applications: JobApplication, index: Number) => {
                      return (
                        <TableRows
                          key={index.toString()}
                          company={applications.company}
                          role={applications.role}
                          date={applications.date}
                          type={applications.type}
                          platform={applications.platform}
                          location={applications.location}
                          link={applications.link}
                          status={applications.status}
                        />
                      );
                    }
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </Layout>
    </div>
  );
}

export default index
