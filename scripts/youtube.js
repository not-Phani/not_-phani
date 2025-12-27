let videohtml = '';
import {contents} from "./basics.js";


contents.forEach(content => {
  const html = `
<div class="video-preview">
            </p>
            <div class="video-preview">
                <div class="thumbail-row">
                    <img  class="thumbail"  src="thumbails/thumbnail-${content.thumbnail}.webp">
            
                    <div class="video-time">${content.timeline}</div>
                </div>
                <div class="video-info-grid">
                    <div class="channel-picture">
                         <img class="profile-picture" src="channel-pictures/channel-${content.channelimg}.jpeg"></div>
                    <div class="video-info">  <p class="video-title">
                      ${content.title}
                    </p>
                    <p class="video-author">
                      ${content.name}
                    </p>
                    <p class="video-stats">
                        ${content.views}</div>
                </div>
               
               
            </div>
            </div>     
    
`;

  videohtml+=html;
});

document.querySelector('.js-video-grid').innerHTML = videohtml;