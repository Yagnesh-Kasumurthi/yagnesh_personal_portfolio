import type { SocialLink } from '../types';

/**
 * Professional Social Links
 * Note: Placeholders are explicitly tagged (isPlaceholder: true)
 * To update, replace the url and set isPlaceholder to false.
 */
export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yagnesh-kasumurthi-a56203324/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWKdnZf7pSf6Z44qR5fEmYQ%3D%3D',
    label: 'LinkedIn Profile',
    isPlaceholder: false,
  },
  {
    id: 'github',
    platform: 'GitHub',
    url: 'https://github.com/Yagnesh-Kasumurthi',
    label: 'GitHub Profile',
    isPlaceholder: false,
  },
  // {
  //   id: 'hackerrank',
  //   platform: 'HackerRank',
  //   url: '',
  //   label: 'HackerRank Profile',
  // },
  // {
  //   id: 'leetcode',
  //   platform: 'LeetCode',
  //   url: '',
  //   label: 'LeetCode Profile',
  // },
  // {
  //   id: 'kaggle',
  //   platform: 'Kaggle',
  //   url: '',
  //   label: 'Kaggle Profile',
  // },
  // {
  //   id: 'huggingface',
  //   platform: 'Hugging Face',
  //   url: '',
  //   label: 'Hugging Face Profile',
  // },
];
