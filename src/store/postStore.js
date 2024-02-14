import { create } from 'zustand'

export const usePostStore = create(set => ({
  posts: [],
  createPost: post => set(state => ({ posts: [...state.posts, post] })),
  deletePost: id => set(state => ({ post: state.posts.filter(post => post.id !== id) })),
  // addComment:
  setPosts: (posts) => set({ posts })

}))
