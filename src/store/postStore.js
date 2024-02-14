import { create } from 'zustand'

export const usePostStore = create(set => ({
  posts: [],
  createPost: post => set(state => ({ posts: [...state.posts, post] })),
  deletePost: id => set(state => ({ post: state.posts.filter(post => post.id !== id) })),
  setPosts: (posts) => set({ posts }),
  addComment: (postId, comment) => set(state => ({
    posts: state.posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, comment]
        }
      }
      return post
    })
  }))
}))
