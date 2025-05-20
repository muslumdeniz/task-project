import Icons from "../icons";
import { Tag } from "../tags";

type TagColor = "green" | "red" | "blue";

type CardProps = {
  title?: string;
  description?: string;
  image?: string;
  tags?: { label: string; color: TagColor }[];
  date?: string;
  countdown?: string;
  authorImage?: string;
  commentCount?: number;
  fileCount?: number;
  showMenu?: boolean;
};

const Card = ({
  title,
  description,
  image,
  tags,
  date,
  countdown,
  authorImage,
  commentCount,
  fileCount,
  showMenu = false,
}: CardProps) => {
  return (
    <div className="bg-white p-4 h-auto rounded-lg shadow-sm">
      {/* Tag Alanı */}
      {tags && tags.length > 0 && (
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} label={tag.label} color={tag.color} />
          ))}
        </div>
      )}

      {/* Başlık ve Menü */}
      {(title || showMenu) && (
        <div className="flex py-4">
          {title && (
            <h2 className="font-medium text-base text-gray-900">{title}</h2>
          )}
          {showMenu && (
            <Icons
              name="DotsHorizontal"
              size={20}
              className="ml-auto text-gray-150 cursor-pointer"
            />
          )}
        </div>
      )}

      {/* Görsel ve Açıklama */}
      {(image || description) && (
        <div>
          {image && (
            <img
              src={image}
              alt="card"
              className="w-full rounded-md mb-2 max-h-52 object-cover"
            />
          )}
          {description && (
            <p className="font-normal text-sm text-gray-150 py-2">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Tarih ve Geri Sayım */}
      {(date || countdown) && (
        <div className="flex gap-2 py-2 items-center">
          {date && (
            <>
              <Icons name="Flag" size={20} className="text-gray-150" />
              <p className="font-medium text-xs text-gray-150">{date}</p>
            </>
          )}
          {countdown && (
            <p className="font-medium text-xs text-gray-150 ml-auto">
              {countdown}
            </p>
          )}
        </div>
      )}

      {/* Alt Alan: Kullanıcı - Yorum - Dosya */}
      {(authorImage ||
        commentCount !== undefined ||
        fileCount !== undefined) && (
        <div className="flex items-center pt-2">
          {authorImage && (
            <img
              src={authorImage}
              alt="author"
              className="inline-block size-6 rounded-full ring-2 ring-white"
            />
          )}

          {(commentCount !== undefined || fileCount !== undefined) && (
            <div className="flex items-center ml-auto gap-4">
              {commentCount !== undefined && (
                <div className="flex items-center gap-1">
                  <Icons
                    name="MessageText2"
                    size={20}
                    className="text-gray-150"
                  />
                  <p className="font-medium text-xs text-gray-150">
                    {commentCount} comments
                  </p>
                </div>
              )}
              {fileCount !== undefined && (
                <div className="flex items-center gap-1">
                  <Icons name="Plus" size={20} className="text-gray-150" />
                  <p className="font-medium text-xs text-gray-150">
                    {fileCount} Files
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { Card };
