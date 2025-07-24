export default function MainContent() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtCSGqndm0iFcLgPM9pzKivz9dCyeiiAnTg&s"
          alt="Example"
          className=" object-cover rounded"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Judul Artikel</h2>
          <p className="text-gray-700 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vel tincidunt tristique, nunc nunc fermentum lorem, a
            finibus nunc purus a justo. Curabitur at orci vitae elit commodo
            facilisis. Integer vulputate felis nec sem tempor, sed lobortis nisi
            hendrerit. Nulla facilisi. Morbi euismod, orci non malesuada
            dignissim, magna lacus malesuada turpis, nec pretium turpis justo
            vel metus.
          </p>
        </div>
      </div>
    </main>
  );
}
