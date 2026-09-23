import Header from "@/components/Header";
import Link from "next/link";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto p-6 mt-8 bg-white shadow-md rounded-xl">
        <Link 
          href="/" 
          className="inline-block mb-4 text-indigo-600 hover:underline font-medium"
        >
          ← Back to Blog
        </Link>
        <h1 className="text-3xl font-bold mb-4 text-gray-800 capitalize">
          {post.title}
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          {post.body}
        </p>
        <div className="text-sm text-gray-400 border-t pt-4 flex justify-between">
          <span>Author ID: #{post.userId}</span>
          <span>Article ID: #{post.id}</span>
        </div>
      </main>
    </div>
  );
}