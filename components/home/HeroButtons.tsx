export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-10">

      <button className="bg-[#B36A5E] text-white rounded-full px-8 py-4 hover:scale-105 transition duration-300">
        Book Your First Session
      </button>

      <button className="border border-[#B36A5E] text-[#B36A5E] rounded-full px-8 py-4 hover:bg-[#B36A5E] hover:text-white transition duration-300">
        Schedule a Discovery Call
      </button>

    </div>
  );
}