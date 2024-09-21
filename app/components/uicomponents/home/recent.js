import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Search,
  Calendar,
  Link as LinkIcon,
  Edit2,
  Flag,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// List of IDs for the bookmarks you want to show
const bookmarkIds = ["a1b2c3d4", "bhqecj4p", "derv1ws0"];

export default function RecentMarks({ data, time, alldata }) {

  // Filter alldata to only include bookmarks with IDs in bookmarkIds
  const filteredBookmarks = alldata.filter((bookmark) =>
    data[0].recentedited.includes(bookmark.id)
  );
  console.log(filteredBookmarks);
  const getIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case "search":
        return <Search className="w-4 h-4" />;
      // Add more cases for other icons as needed
      default:
        return <Search className="w-4 h-4" />;
    }
  };
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "destructive";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "";
      default:
        return "secondary";
    }
  };

  return (
    <div className="w-full rounded-xl h-[250px]">
      <div className="w-[93%] pt-7 ml-auto mr-auto">
        <p className="semibold text-2xl">Recently Modified</p>
        <p className="medium text-sm -mt-0.5">
          Created or edited bookmarks will be shown here/history.
        </p>
      </div>

      <div className="ml-auto mt-2 mr-auto">
        <Carousel className="w-[95.5%] ml-auto mr-auto mt-3 h-[110px]">
          <CarouselContent className="flex w-full border-none">
            {/* Display a single card with bookmarks */}
            <CarouselItem className="w-full border-none">
              <div className="p-1 border-none">
                <Card>
                  <CardContent className="flex h-full items-center  p-2 ">
                    {/* Render only available bookmarks */}
                    <div className="flex flex-row justify-normal w-full ">
                      {filteredBookmarks.slice(0,4).map((bookmark, index) => (
                        <div key={bookmark.id} className="w-1/4 ml-2 mr-2">
                          <div className="bg-[#212121] border border-[#474747] rounded-lg shadow-lg overflow-hidden text-gray-200 p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center rounded-full">
                                  {getIcon(bookmark.icon)}
                                </div>
                                <h2 className="text-sm  line-clamp-2 font-bold truncate">
                                {(bookmark.name)}
                                </h2>
                              </div>

                              <Badge variant={getPriorityColor(bookmark.priority)}>
                                {bookmark.priority}
                              </Badge>
                            </div>

                            <p className="text-gray-400 text-xs line-clamp-2" align="left" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
  {bookmark.description}
</p>

                            <div className="flex flex-wrap gap-2 text-[10px] text-gray-400 mt-2">
                              <div className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                <span>{formatDate(bookmark.created)}</span>
                              </div>
                              <div className="flex items-center">
                                <Edit2 className="w-3 h-3 mr-1" />
                                <span>{formatDate(bookmark.edited)}</span>
                              </div>
                             
                           
                            <div className="flex items-center">
                                <LinkIcon className="w-3 h-3 mr-1" />
                                <span>{bookmark.linkCount}  Links</span>
                              </div>
                              <div className="flex items-center">
                                <Flag className="w-3 h-3 mr-1" />
                                <span className="truncate">
                                                                {(bookmark.pageName).substring(0, 7)+"..."}

                                  </span>
                              </div>
</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
<br />
        <Separator className="mt-2  w-[93.5%] bg-[#474747] ml-auto mr-auto" />
        <br />
      </div>
    </div>
  );
}
