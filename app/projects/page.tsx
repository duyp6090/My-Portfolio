import Header from "@/components/Header"
import Projects from "@/components/ProjectCard"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Projects /> {/* ✅ Hiển thị danh sách dự án */}
      </main>
    </>
  )
}
