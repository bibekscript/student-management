function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="my-3 text-center">&copy; Shining Star English School, {currentYear}</div>
    </footer>
  );
}
export default Footer;