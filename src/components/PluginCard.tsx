import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PluginData } from '@/lib/plugins';
import { FileText } from 'lucide-react';

interface PluginCardProps {
  plugin: PluginData;
  locale: string;
}

export function PluginCard({ plugin, locale }: PluginCardProps) {
  return (
    <Link href={`/${locale}/${plugin.slug}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-lg">{plugin.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {plugin.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}