"use client";
import { formatDate } from "@/components/shared/DateFormater";
import styles from "./index.module.scss";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiService from "@/services/ApiService";
import CustomSwiper from "@/components/shared/customSwiper";
// import "../../app/globals.scss";

const apiService = new ApiService();

const CampaignUpdates = ({ campaignUpdates }) => {
  const [media, setMedia] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(media?.[0]);

  const [mediaMap, setMediaMap] = useState({});
  const [selectedMediaMap, setSelectedMediaMap] = useState({});

  useEffect(() => {
    const fetchAllUpdateMedia = async () => {
      try {
        const mediaGroup = {};
        const selectedMedia = {};

        for (const update of campaignUpdates) {
          const res = await apiService.get(
            `/campaign/${update.id}/getUpdateMediaList`,
            {}
          );
          if (res.status === 200 && res.data.length > 0) {
            const sortedMedia = res.data.sort(
              (a, b) => a.priority - b.priority
            );
            mediaGroup[update.id] = sortedMedia;
            selectedMedia[update.id] = sortedMedia[0];
          }
        }

        setMediaMap(mediaGroup);
        setSelectedMediaMap(selectedMedia);
      } catch (error) {
        toast.error("Something went wrong when retrieving media");
      }
    };

    if (campaignUpdates?.length > 0) {
      fetchAllUpdateMedia();
    }
  }, [campaignUpdates]);

  // useEffect(() => {
  //   const fetchAllUpdateMedia = async () => {
  //     try {
  //       const allMedia = [];

  //       for (const update of campaignUpdates) {
  //         const res = await apiService.get(
  //           `/campaign/${update.id}/getUpdateMediaList`,
  //           {}
  //         );
  //         if (res.status === 200 && res.data.length > 0) {
  //           res.data.map((media) => allMedia.push(media));
  //         }
  //       }

  //       setMedia(allMedia.sort((a, b) => a.priority - b.priority));
  //       setSelectedMedia(allMedia?.[0]);
  //     } catch (error) {
  //       toast.error("Something went wrong when retrieving media");
  //     }
  //   };

  //   if (campaignUpdates?.length > 0) {
  //     fetchAllUpdateMedia();
  //   }
  // }, [campaignUpdates]);

  return (
    <div className={styles.updates_container}>
      <h2>Updates</h2>
      {campaignUpdates?.map((update, index) => (
        <div key={index} className={styles.update_item}>
          <div className={styles.update_marker}>
            <div className={styles.circle}></div>
            <div className={styles.update_date}>
              {formatDate(update.createdOn, "DD/MM/YYYY")}
            </div>
          </div>
          {/* // ${index == campaignUpdates.length - 1 && styles.last_child} */}
          <div
            className={`${styles.update_content}
           `}
          >
            {/* {index !== campaignUpdates.length - 1 && ( */}
            <div className={styles.progress}></div>
            {/* )} */}
            <div className={styles.update_text}>
              <div
                className="ql-editor"
                dangerouslySetInnerHTML={{ __html: update.content }}
              />
              {mediaMap[update.id]?.length > 0 && (
                <div className={styles.previewWrapper}>
                  {selectedMediaMap[update.id]?.type === "video" ? (
                    <video
                      controls
                      className={styles.previewVideo}
                      src={selectedMediaMap[update.id]?.source}
                    />
                  ) : (
                    <img
                      src={selectedMediaMap[update.id]?.source}
                      alt="preview"
                      className={styles.previewImage}
                    />
                  )}
                </div>
              )}

              {mediaMap[update.id]?.length > 0 && (
                <CustomSwiper
                  showDots={false}
                  slidesPerView={3}
                  spaceBetween={10}
                  wrapperClassName={styles.wrapperClassName}
                  paginationColor="#F4F4FC"
                  activePaginationColor="#A92A04"
                  breakpoints={{
                    768: { slidesPerView: 3, spaceBetween: 10 },
                    1024: { slidesPerView: 6, spaceBetween: 10 },
                    1200: { slidesPerView: 6, spaceBetween: 10 },
                  }}
                >
                  {mediaMap[update.id].map((item, mediaIndex) => (
                    <div
                      key={mediaIndex}
                      className={styles.div}
                      onClick={() =>
                        setSelectedMediaMap((prev) => ({
                          ...prev,
                          [update.id]: item,
                        }))
                      }
                    >
                      {item.type === "video" ? (
                        <video
                          src={item.source}
                          muted
                          className={styles.thumbnailVideo}
                        />
                      ) : (
                        <img
                          src={item.source}
                          alt={`slide-${mediaIndex}`}
                          className={styles.campaignImage}
                        />
                      )}
                    </div>
                  ))}
                </CustomSwiper>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampaignUpdates;
