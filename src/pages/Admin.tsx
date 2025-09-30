import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Trash2, Edit, Plus } from "lucide-react";

const Admin = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "3-izbový byt v centre Bratislavy",
      price: "299,900€",
      location: "Bratislava - Staré Mesto",
      status: "published"
    },
    {
      id: 2,
      title: "Rodinný dom s garážou",
      price: "450,000€", 
      location: "Nitra",
      status: "draft"
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    price: "",
    location: "",
    description: ""
  });

  const handleAddPost = () => {
    if (newPost.title && newPost.price) {
      setPosts([...posts, {
        id: Date.now(),
        title: newPost.title,
        price: newPost.price,
        location: newPost.location,
        status: "draft"
      }]);
      setNewPost({ title: "", price: "", location: "", description: "" });
    }
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">Správa nehnuteľností a obsahu</p>
        </header>

        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList>
            <TabsTrigger value="posts">Nehnuteľnosti</TabsTrigger>
            <TabsTrigger value="settings">Nastavenia</TabsTrigger>
            <TabsTrigger value="analytics">Štatistiky</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Pridať novú nehnuteľnosť
                </CardTitle>
                <CardDescription>
                  Vytvorte nový záznam nehnuteľnosti
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Názov nehnuteľnosti"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  />
                  <Input
                    placeholder="Cena (napr. 299,900€)"
                    value={newPost.price}
                    onChange={(e) => setNewPost({...newPost, price: e.target.value})}
                  />
                </div>
                <Input
                  placeholder="Lokalita"
                  value={newPost.location}
                  onChange={(e) => setNewPost({...newPost, location: e.target.value})}
                />
                <Textarea
                  placeholder="Popis nehnuteľnosti"
                  value={newPost.description}
                  onChange={(e) => setNewPost({...newPost, description: e.target.value})}
                />
                <Button onClick={handleAddPost} className="w-full md:w-auto">
                  Pridať nehnuteľnosť
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Existujúce nehnuteľnosti</CardTitle>
                <CardDescription>
                  Spravujte už vytvorené nehnuteľnosti
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">{post.location}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="font-medium text-primary">{post.price}</span>
                          <Badge variant={post.status === "published" ? "default" : "secondary"}>
                            {post.status === "published" ? "Publikované" : "Koncept"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDeletePost(post.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Nastavenia systému</CardTitle>
                <CardDescription>Konfigurácia webovej stránky</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Nastavenia budú dostupné v budúcej verzii.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Štatistiky a analytika</CardTitle>
                <CardDescription>Prehľad návštevnosti a výkonnosti</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Analytické údaje budú dostupné v budúcej verzii.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;