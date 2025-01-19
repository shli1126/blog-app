import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="w-96 h-[450px] bg-white border  shadow-md">
      <div className="h-2/3">
        <Link to={`/post/${post.slug}`}>
          <img
            src={post.image}
            alt="post cover"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="h-1/3 px-6 py-4">
        <h2 className="text-gray-500 uppercase text-sm font-bold mb-2 tracking-widest">
          {post.title}
        </h2>

        <p className="text-gray-800 font-semibold text-sm mb-4 leading-relaxed">
          {post.category}
        </p>

        <p className="text-gray-900 hover:underline">
          <Link to={`/post/${post.slug}`}>Read article</Link>
        </p>
      </div>
    </div>
  );
}
