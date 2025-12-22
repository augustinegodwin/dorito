export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <div className="flex gap-5 min-h-screen w-full max-w-4xl flex-col items-center justify-between px-8 py-32 sm:px-16 bg-white dark:bg-black sm:items-start">
        {children}
      </div>
    </div>
  );
}
