export interface MediaDTO {
  author: {
    user_name: string;
    person_name: string;
    user_bio: string;
    user_id: string;
    user_avatar_url: string;
    counters: {
      videos: number;
      followers: number;
      followings: number;
      likes: number;
    };
    subscriptions: {
      is_following: boolean;
    };
    is_blocked: boolean;
    is_blockable: boolean;
    is_reportable: boolean;
    is_identity_confirmed: boolean;
    is_followable: boolean;
    is_deleted: boolean;
  };
  media_id: string;
  media_name: string;
  media_description: string;
  created_at: number;
  categories: any[];
  counters: {
    likes: number;
    views: number;
    comments: number;
    reposts: number;
  };
  parent_resource_reference: {
    resource_type: string;
    resource_id: string;
    resource_url: string | null;
    resource_title: string;
  };
  moderation_status: string;
  deleted_at: number | null;
  preview_url: string;
  media_url: string;
  media_urls: {
    h264_medium: string;
    h264_high: string;
    h264_low: string;
  };
  thumbnail_url: string;
  is_boosted: boolean;
  is_liked: boolean;
  is_deleted: boolean;
  is_blocked: boolean;
  is_hidable: boolean;
  is_challenge_winner: boolean;
  is_deletable: boolean;
  is_reportable: boolean;
  media_duration: number;
  allow_comments: boolean;
  boost_coefficient: number;
  user_likes_preview: any[];
  show_id: any;
  votes: any;
  is_voted: boolean;
  is_votable: boolean;
  challenge_stage: string;
  show_views: any;
  audio: any;
}

export interface MediaListDTO {
  data: {
    media: MediaDTO[];
  };
}
