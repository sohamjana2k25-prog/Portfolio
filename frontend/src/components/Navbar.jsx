function Navbar() {
  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-md p-4 flex justify-center gap-8 z-50">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
export default Navbar;
