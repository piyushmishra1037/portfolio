export function Footer() {
  return (
    <footer className="bg-background py-8 border-t">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} piyushmishra1085@gmail.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
}