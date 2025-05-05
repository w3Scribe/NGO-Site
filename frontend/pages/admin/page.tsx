import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Bell, FileText, PlusCircle, Settings, Shield, UserCog, Users } from 'lucide-react';
import ProtectedRoute from '../../components/protected-route';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { useAuth } from '../../lib/AuthContext';

export const Route = createFileRoute('/admin/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useAuth();
  
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <ProtectedRoute requireAdmin={true}>
      <motion.div
        className="w-full min-h-screen pt-16 bg-slate-50"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto px-4 py-6">
          {/* Admin Dashboard Header */}
          <motion.div 
            className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center"
            variants={itemVariants}
          >
            <div>
              <h1 className="text-2xl font-bold text-gray-800 flex items-center">
                <Shield className="mr-2 h-5 w-5 text-purple-600" />
                Admin Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back, {user?.name || 'Admin'}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Settings className="mr-2 h-4 w-4" />
                Admin Settings
              </Button>
            </div>
          </motion.div>

          {/* Admin Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="users">User Management</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              {/* Stats Dashboard */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold">1,245</p>
                          <p className="text-xs text-green-600">+12% from last month</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-full">
                          <Users className="h-5 w-5 text-blue-500" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Active Volunteers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold">250</p>
                          <p className="text-xs text-green-600">+5% from last month</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-full">
                          <UserCog className="h-5 w-5 text-purple-500" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Reports Generated</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold">32</p>
                          <p className="text-xs text-yellow-600">Same as last month</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-full">
                          <FileText className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
              
              {/* Recent Activity */}
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest actions on the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-start space-x-4 pb-4 border-b border-gray-100">
                          <div className="bg-slate-100 p-2 rounded-full">
                            {i % 3 === 0 ? (
                              <UserCog className="h-4 w-4 text-purple-500" />
                            ) : i % 2 === 0 ? (
                              <FileText className="h-4 w-4 text-green-500" />
                            ) : (
                              <Bell className="h-4 w-4 text-blue-500" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">
                              {i % 3 === 0
                                ? 'New volunteer registered'
                                : i % 2 === 0
                                ? 'Monthly report generated'
                                : 'Donation campaign updated'}
                            </p>
                            <p className="text-xs text-gray-500">
                              {i * 2} hours ago
                            </p>
                          </div>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="users">
              <motion.div variants={containerVariants}>
                <Card className="mb-6">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>User Management</CardTitle>
                        <CardDescription>Manage users, volunteers, and donors</CardDescription>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add User
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-5 bg-slate-50 p-4 font-medium text-sm">
                        <div>Name</div>
                        <div>Email</div>
                        <div>Role</div>
                        <div>Status</div>
                        <div>Actions</div>
                      </div>
                      <div className="divide-y">
                        {Array(5).fill(0).map((_, i) => (
                          <div key={i} className="grid grid-cols-5 p-4 text-sm items-center">
                            <div className="font-medium">User {i + 1}</div>
                            <div>user{i + 1}@example.com</div>
                            <div>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                i % 3 === 0 
                                  ? 'bg-purple-100 text-purple-800' 
                                  : i % 2 === 0 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Volunteer' : 'Donor'}
                              </span>
                            </div>
                            <div>
                              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                                Active
                              </span>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="ghost" size="sm" className="text-red-500">
                                Deactivate
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="content">
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Content Management</CardTitle>
                        <CardDescription>Manage website content and campaigns</CardDescription>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Content
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center py-12 text-gray-500">
                      Content management interface coming soon
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="settings">
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle>Admin Settings</CardTitle>
                    <CardDescription>Configure admin account and preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center py-12 text-gray-500">
                      Settings interface coming soon
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </ProtectedRoute>
  );
}
