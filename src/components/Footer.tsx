const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                KANUE <span className="text-gold">VENTURES</span>
              </h3>
              <p className="text-muted-foreground max-w-md">
                Building sustainable value and impact with partners and communities.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Location</p>
              <p className="text-foreground">South Kashmir</p>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Kanue Ventures. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                A family-owned investment firm
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
