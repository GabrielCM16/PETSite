'use client';
import { config } from '@/config/gluestack-ui.config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

export function Providers({ children }: { children: React.ReactNode }) {
  return <GluestackUIProvider config={config} colorMode='dark'>{children}</GluestackUIProvider>;
}
