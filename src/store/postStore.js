import { create } from 'zustand'

export const usePostStore = create(set => ({
  posts: [],
  createPost: post => set(state => ({ posts: [...state.posts, post] }))
  // deletePost:
  // addComment:
  // setComment:

}))
