'use client';
import { useState } from 'react'
import { Search, Calendar, Link as LinkIcon, Edit2, Flag, ChevronDown, ChevronUp } from 'lucide-react'

export function ElegantBookmark({
  name = "Bookmark 1",
  description = "This is the first bookmark.",
  pageName = "Page1",
  created = "22 Jan 24",
  links = ["Link 1", "Link 2", "Link 3", "Link 4"],
  edited = "22 Jan 24",
  linkCount = 5,
  priority = "High",
  icon = "search"
} = {}) {
  const [showLinks, setShowLinks] = useState(false)

  const getIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case 'search':
        return <Search className="w-4 h-4" />;
      // Add more cases for other icons as needed
      default:
        return <Search className="w-4 h-4" />;
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-500'
      case 'medium':
        return 'bg-yellow-500'
      case 'low':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    (<div
      className="w-[200px] bg-[#212121] border border-[#474747] rounded-lg shadow-lg overflow-hidden text-gray-200">
      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1 bg-gray-700 rounded-full">
              {getIcon(icon)}
            </div>
            <h2 className="text-sm font-bold truncate">{name}</h2>
          </div>
          <span
            className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${getPriorityColor(priority)} text-white`}>
            {priority}
          </span>
        </div>
        
        <p className="text-gray-400 text-xs line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 text-[10px] text-gray-400">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{created}</span>
          </div>
          <div className="flex items-center">
            <Edit2 className="w-3 h-3 mr-1" />
            <span>{edited}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 text-[10px] text-gray-400">
          <div className="flex items-center">
            <LinkIcon className="w-3 h-3 mr-1" />
            <span>{linkCount} links</span>
          </div>
          <div className="flex items-center">
            <Flag className="w-3 h-3 mr-1" />
            <span className="truncate">{pageName}</span>
          </div>
        </div>
        
        <div>
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="flex items-center justify-between w-full px-2 py-1 text-xs font-medium text-left text-gray-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
            <span>Links</span>
            {showLinks ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
          {showLinks && (
            <ul className="mt-1 space-y-1 text-xs text-gray-400">
              {links.map((link, index) => (
                <li key={index} className="pl-2 truncate">{link}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>)
  );
}