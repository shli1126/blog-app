import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import HomeBanner from "../components/HomeBanner";
export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <HomeBanner />
      <div className="p-3 bg-white dark:bg-slate-700">
        <CallToAction />
      </div>
      <div className="max-w-[1900px] mx-auto flex flex-col gap-10 py-7 ">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-10">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  mx-auto">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>

            <Link
              to={"/search"}
              className="text-lg text-gray-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
