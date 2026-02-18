import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="py-10">
      <Container>
        <div className="text-sm text-neutral-600">
          © {new Date().getFullYear()} QLOUT Studio
        </div>
      </Container>
    </footer>
  );
}
