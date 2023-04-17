import "./sharing.scss";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';


const Sharing = ({post, setOpenSharing }) => {
    const shareUrl = `${window.location.origin}/post/${post.id}`;
    const title = post.id;
    return (
        <div className="sharing">
          <div className="sharing__buttons">
            {/* Social media share buttons */}
            <div className="sharing__button sharing__button--email">
              <EmailShareButton url={shareUrl} subject={title} body="Check out this post!">
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
            <div className="sharing__button sharing__button--facebook">
              <FacebookShareButton url={shareUrl} quote={title}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
            <div className="sharing__button sharing__button--twitter">
              <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
            <div className="sharing__button sharing__button--whatsapp">
              <WhatsappShareButton url={shareUrl} title={title}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
            {/* Copy link button */}
      <div className="sharing__button sharing__button--copy">
        <CopyToClipboard text={shareUrl}>
          <button>Copy Link</button>
        </CopyToClipboard>
      </div>
          </div>

      

      <button className="sharing__close-button" onClick={() => setOpenSharing(false)}>close</button>
    </div>
  );
};

export default Sharing;
