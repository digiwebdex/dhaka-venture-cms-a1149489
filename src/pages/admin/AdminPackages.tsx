import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { useCms } from "@/contexts/CmsContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Package } from "@/data/defaultData";
import { Trash2, Plus } from "lucide-react";

const AdminPackages = () => {
  const { t } = useLang();
  const { packages, updatePackages, addPackage, deletePackage } = useCms();
  const { toast } = useToast();
  const [editing, setEditing] = useState<Package | null>(null);
  const [showAdd, setShowAdd] = useState(false);

  const emptyPkg: Package = {
    id: "", title: "", titleBn: "", destination: "", destinationBn: "",
    duration: "", durationBn: "", price: "", priceBn: "",
    description: "", descriptionBn: "", image: "", featured: false, category: "tour",
  };

  const [form, setForm] = useState<Package>(emptyPkg);

  const handleEdit = (pkg: Package) => { setEditing(pkg); setForm({ ...pkg }); setShowAdd(false); };
  const handleAdd = () => { setForm({ ...emptyPkg, id: Date.now().toString() }); setShowAdd(true); setEditing(null); };

  const handleSave = () => {
    if (showAdd) {
      addPackage(form);
      toast({ title: "Package added!" });
      setShowAdd(false);
    } else if (editing) {
      updatePackages(packages.map((p) => (p.id === form.id ? form : p)));
      toast({ title: "Package updated!" });
      setEditing(null);
    }
  };

  const handleDelete = (id: string) => { deletePackage(id); toast({ title: "Package deleted!" }); };

  const renderForm = () => (
    <Card className="mb-6">
      <CardContent className="p-6 space-y-4">
        <h3 className="font-bold">{showAdd ? t.admin.add : t.admin.edit}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Title (EN)" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          <Input placeholder="Title (BN)" value={form.titleBn} onChange={(e) => setForm({ ...form, titleBn: e.target.value })} />
          <Input placeholder="Destination (EN)" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} />
          <Input placeholder="Destination (BN)" value={form.destinationBn} onChange={(e) => setForm({ ...form, destinationBn: e.target.value })} />
          <Input placeholder="Duration (EN)" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} />
          <Input placeholder="Duration (BN)" value={form.durationBn} onChange={(e) => setForm({ ...form, durationBn: e.target.value })} />
          <Input placeholder="Price (EN)" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
          <Input placeholder="Price (BN)" value={form.priceBn} onChange={(e) => setForm({ ...form, priceBn: e.target.value })} />
          <Input placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
          <Select value={form.category} onValueChange={(v: "umrah" | "tour" | "hajj") => setForm({ ...form, category: v })}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="umrah">Umrah</SelectItem>
              <SelectItem value="tour">Tour</SelectItem>
              <SelectItem value="hajj">Hajj</SelectItem>
            </SelectContent>
          </Select>
          <Textarea placeholder="Description (EN)" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <Textarea placeholder="Description (BN)" value={form.descriptionBn} onChange={(e) => setForm({ ...form, descriptionBn: e.target.value })} />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} id="featured" />
          <label htmlFor="featured" className="text-sm">Featured</label>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSave} className="bg-primary text-primary-foreground">{t.admin.save}</Button>
          <Button variant="outline" onClick={() => { setEditing(null); setShowAdd(false); }}>Cancel</Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl">{t.admin.managePackages}</h2>
        <Button onClick={handleAdd} className="gap-2"><Plus className="w-4 h-4" />{t.admin.add}</Button>
      </div>

      {(showAdd || editing) && renderForm()}

      <div className="space-y-3">
        {packages.map((pkg) => (
          <Card key={pkg.id}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {pkg.image && <img src={pkg.image} alt="" className="w-16 h-12 object-cover rounded" />}
                <div>
                  <p className="font-semibold">{pkg.title}</p>
                  <p className="text-sm text-muted-foreground">{pkg.category} • {pkg.destination} • {pkg.price}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(pkg)}>{t.admin.edit}</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(pkg.id)}><Trash2 className="w-4 h-4" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminPackages;
