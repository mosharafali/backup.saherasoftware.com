export const dynamic = "force-dynamic";
import HomeBanner from "@/components/HomeBanner";

export default function AboutPage() {
  return (
    <main className="p-8">
      <div>
        <HomeBanner />
      </div>
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <p className="mb-2">
          We are Sahera software. Sahera software is a dynamic entity at the
          heart of the digital age. We are the architects of the virtual spaces
          that power modern business, foster communication, and bring
          imagination to life on the web.
        </p>
        <h1 className="text-3xl font-bold mb-2">
          Pioneers of Digital Innovation
        </h1>
        <p className="mb-2">
          Sahera software is a specialized organization dedicated to designing,
          building, and maintaining websites, web applications, and other
          digital platforms. We are the catalysts for innovation, constantly
          pushing the boundaries of whats possible in the digital realm. We
          blend artistic design with technical prowess to create seamless and
          user-friendly web experiences.
        </p>
      </div>
    </main>
  );
}
