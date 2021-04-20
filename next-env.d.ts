/// <reference types="next" />
/// <reference types="next/types/global" />

declare module 'react-social-icons' {
  export class SocialIcon extends React.Component<
    { className: string; url: string },
    any
  > {}
}
