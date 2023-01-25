import packageJSON from "../package.json"

export default function Footer() {
  return (
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <a href="https://github.com/matteogheza/av-equipment-manager">av-equipment-manager</a> - <em>Version {packageJSON.version}</em>
        </div>
      </div>
    </footer>
  )
}