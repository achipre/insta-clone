import { create } from 'zustand'

export const useUserProfileStore = create(set => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  // addPost thi si to uploaded the number of profile page
  addPost: (post) => set(state => ({
    userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts] }
  }))
}))
