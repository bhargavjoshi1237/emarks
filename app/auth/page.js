import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
// import NavbarX from "../components/uicomponents/navbar";
import { LoginForm } from "./authxd";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Page = () => {
  return (
      <>
    
        <div className="min-h-screen ">
          
          {/* Header */}
          <div className="w-full bg-[#161616] h-[80px] flex  items-end justify-end">
          <Button className=" mr-4 bg-white text-[#191919] mr-16  w-[150px] h-[50px] hover:border hover:border-[#e7e7e7] hover:bg-transparent hover:border-2 hover:text-white " style={{fontFamily:"extrabold"}}>Get an Invite</Button>

          </div>
  
          {/* Main Content */}
          <div className="flex w-full h-[calc(100vh-80px)]">
            {/* Left Section */}
            <div className="w-[50%] bg-[#161616]">
               <div className="bg-[#161616] w-[70%] ml-[10%] mr-auto h-full">
               <p style={{color:"#a4a4a4"}} className="text-[#474747] medium text-7xl pt-32">Take a Deep Dive in </p>
               <p style={{color:"#a4a4a4"}} className="medium text-7xl pt-4">a completely New </p>
               <p className="medium text-7xl pt-5">Way.</p>

<br />
                <p className="medium text-2xl pt-5">Brainstorming, sketching, mind mapping, all-in one workplace.</p>
                 <p className=" text-lg pt-3  text-[#747474] " style={{fontFamily:"extrabold"}}>Eliminate the time- consuming and wasteful habits with taking and processing notes by making your research and analysis availability everywhere you want it to be.</p>
               <br />
              
              <div className="flex">
              <Button className=" mr-4 bg-white text-[#191919] w-[150px] h-[50px] hover:border hover:border-[#e7e7e7] hover:bg-transparent hover:border-2 hover:text-white" style={{fontFamily:"extrabold"}}>Get an Invite</Button>
               <Button className="bg-[#474747] text-[#e7e7e7] w-[150px] h-[50px]  hover:bg-[#e7e7e7]  hover:text-[#191919]" style={{fontFamily:"extrabold"}}>Try For Free</Button>
               
              </div>
              <br />
              
              <div className="flex mt-4 items-center">
                 <p className="text-xl">Working Under the hood</p>
                 {/* <hr className="bg-[#474747] w-[500px] text-[#474747]" /> */}
                 <Separator className="bg-[#474747] ml-5 w-[200px] text-[#474747]" />
                    
                    
                 </div>
                 <br />
                 <div className="flex gap-6">
                 <TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
      <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" viewBox="0 0 256 220"><path fill="#912626" d="M245.97 168.943c-13.662 7.121-84.434 36.22-99.501 44.075s-23.437 7.78-35.34 2.09c-11.902-5.69-87.216-36.112-100.783-42.597C3.566 169.271 0 166.535 0 163.951v-25.876s98.05-21.345 113.879-27.024c15.828-5.679 21.32-5.884 34.79-.95c13.472 4.936 94.018 19.468 107.331 24.344l-.006 25.51c.002 2.558-3.07 5.364-10.024 8.988"></path><path fill="#C6302B" d="M245.965 143.22c-13.661 7.118-84.431 36.218-99.498 44.072c-15.066 7.857-23.436 7.78-35.338 2.09c-11.903-5.686-87.214-36.113-100.78-42.594c-13.566-6.485-13.85-10.948-.524-16.166c13.326-5.22 88.224-34.605 104.055-40.284c15.828-5.677 21.319-5.884 34.789-.948c13.471 4.934 83.819 32.935 97.13 37.81c13.316 4.881 13.827 8.9.166 16.02"></path><path fill="#912626" d="M245.97 127.074c-13.662 7.122-84.434 36.22-99.501 44.078c-15.067 7.853-23.437 7.777-35.34 2.087c-11.903-5.687-87.216-36.112-100.783-42.597C3.566 127.402 0 124.67 0 122.085V96.206s98.05-21.344 113.879-27.023c15.828-5.679 21.32-5.885 34.79-.95C162.142 73.168 242.688 87.697 256 92.574l-.006 25.513c.002 2.557-3.07 5.363-10.024 8.987"></path><path fill="#C6302B" d="M245.965 101.351c-13.661 7.12-84.431 36.218-99.498 44.075c-15.066 7.854-23.436 7.777-35.338 2.087c-11.903-5.686-87.214-36.112-100.78-42.594c-13.566-6.483-13.85-10.947-.524-16.167C23.151 83.535 98.05 54.148 113.88 48.47c15.828-5.678 21.319-5.884 34.789-.949c13.471 4.934 83.819 32.933 97.13 37.81c13.316 4.88 13.827 8.9.166 16.02"></path><path fill="#912626" d="M245.97 83.653c-13.662 7.12-84.434 36.22-99.501 44.078c-15.067 7.854-23.437 7.777-35.34 2.087c-11.903-5.687-87.216-36.113-100.783-42.595C3.566 83.98 0 81.247 0 78.665v-25.88s98.05-21.343 113.879-27.021c15.828-5.68 21.32-5.884 34.79-.95C162.142 29.749 242.688 44.278 256 49.155l-.006 25.512c.002 2.555-3.07 5.361-10.024 8.986"></path><path fill="#C6302B" d="M245.965 57.93c-13.661 7.12-84.431 36.22-99.498 44.074c-15.066 7.854-23.436 7.777-35.338 2.09C99.227 98.404 23.915 67.98 10.35 61.497S-3.5 50.55 9.825 45.331C23.151 40.113 98.05 10.73 113.88 5.05c15.828-5.679 21.319-5.883 34.789-.948s83.819 32.934 97.13 37.811c13.316 4.876 13.827 8.897.166 16.017"></path><path fill="#FFF" d="m159.283 32.757l-22.01 2.285l-4.927 11.856l-7.958-13.23l-25.415-2.284l18.964-6.839l-5.69-10.498l17.755 6.944l16.738-5.48l-4.524 10.855zm-28.251 57.518L89.955 73.238l58.86-9.035zm-56.95-50.928c17.375 0 31.46 5.46 31.46 12.194c0 6.736-14.085 12.195-31.46 12.195s-31.46-5.46-31.46-12.195c0-6.734 14.085-12.194 31.46-12.194"></path><path fill="#621B1C" d="m185.295 35.998l34.836 13.766l-34.806 13.753z"></path><path fill="#9A2928" d="m146.755 51.243l38.54-15.245l.03 27.519l-3.779 1.478z"></path></svg> 
    </TooltipTrigger>
  <TooltipContent className="bg-[#a4a4a4] font-semibold">
      <p>Redis for Cashing</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
    <svg xmlns="http://www.w3.org/2000/svg" width="2.2em" height="2.2em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#023430" rx="60"></rect><path fill="#10AA50" d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"></path><path fill="#B8C4C2" d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a224 224 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397"></path><path fill="#12924F" d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a500 500 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92 92 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684"></path></g></svg>
    </TooltipTrigger>
  <TooltipContent className="bg-[#a4a4a4] font-semibold">
      <p>MangoDB </p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
      <svg xmlns="http://www.w3.org/2000/svg" width="2.2em" height="2.2em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#E43717" rx="60"></rect><path fill="#fff" d="m226.574 125.551l-8.39-5.198q-.107-1.227-.239-2.446l7.224-6.727a2.88 2.88 0 0 0 .864-2.676a2.87 2.87 0 0 0-1.821-2.14l-9.232-3.44c-.231-.799-.474-1.592-.722-2.389l5.753-7.988a2.88 2.88 0 0 0 .325-2.79a2.9 2.9 0 0 0-2.198-1.747l-9.729-1.583a72 72 0 0 0-1.17-2.178l4.091-8.982a2.89 2.89 0 0 0-.226-2.81a2.87 2.87 0 0 0-2.504-1.282l-9.881.344q-.765-.958-1.56-1.892l2.275-9.613a2.896 2.896 0 0 0-3.485-3.483l-9.613 2.274a83 83 0 0 0-1.896-1.56l.346-9.88c.038-1-.45-1.95-1.283-2.504a2.9 2.9 0 0 0-2.81-.227l-8.964 4.09q-1.086-.599-2.178-1.172l-1.587-9.727a2.87 2.87 0 0 0-1.747-2.198a2.88 2.88 0 0 0-2.79.325l-7.989 5.752a97 97 0 0 0-2.37-.72l-3.441-9.23a2.89 2.89 0 0 0-2.14-1.826a2.9 2.9 0 0 0-2.676.864l-6.728 7.224a87 87 0 0 0-2.446-.239l-5.199-8.409A2.9 2.9 0 0 0 127.972 28c-1.009 0-1.93.518-2.446 1.368l-5.199 8.41c-.818.066-1.636.148-2.446.238l-6.728-7.224a2.9 2.9 0 0 0-2.676-.864a2.88 2.88 0 0 0-2.141 1.825l-3.44 9.23c-.799.23-1.59.473-2.37.721l-7.99-5.752a2.87 2.87 0 0 0-2.79-.325A2.9 2.9 0 0 0 88 37.825l-1.586 9.727q-1.1.571-2.179 1.172l-8.964-4.09a2.893 2.893 0 0 0-4.092 2.731l.344 9.88a92 92 0 0 0-1.896 1.56l-9.614-2.274a2.91 2.91 0 0 0-2.714.77c-.71.709-1 1.731-.77 2.713l2.255 9.613a93 93 0 0 0-1.556 1.892l-9.88-.344a2.9 2.9 0 0 0-2.505 1.282a2.9 2.9 0 0 0-.227 2.81l4.09 8.982q-.599 1.08-1.172 2.178l-9.728 1.583a2.87 2.87 0 0 0-2.198 1.747a2.89 2.89 0 0 0 .325 2.79l5.753 7.988a82 82 0 0 0-.723 2.389l-9.231 3.44a2.89 2.89 0 0 0-1.822 2.14a2.89 2.89 0 0 0 .864 2.676l7.225 6.727q-.135 1.22-.239 2.446l-8.39 5.198a2.89 2.89 0 0 0-1.37 2.465c0 1.011.518 1.931 1.369 2.447l8.39 5.198q.105 1.228.239 2.446l-7.225 6.727a2.888 2.888 0 0 0 .958 4.816l9.231 3.44c.23.799.472 1.592.723 2.389l-5.753 7.988a2.886 2.886 0 0 0 1.892 4.537l9.729 1.582q.57 1.107 1.171 2.179l-4.09 8.963a2.892 2.892 0 0 0 2.731 4.091l9.862-.345a95 95 0 0 0 1.56 1.895l-2.255 9.613c-.23.975.06 1.988.77 2.695a2.89 2.89 0 0 0 2.714.768l9.614-2.255a78 78 0 0 0 1.896 1.556l-.344 9.88a2.88 2.88 0 0 0 1.282 2.503c.83.556 1.893.641 2.81.224l8.964-4.09q1.083.602 2.179 1.172l1.586 9.727c.16.99.822 1.827 1.747 2.217c.923.384 1.988.26 2.79-.323l7.99-5.752c.789.25 1.582.495 2.389.724l3.44 9.23a2.88 2.88 0 0 0 2.141 1.822a2.88 2.88 0 0 0 2.676-.864l6.728-7.224c.812.094 1.63.172 2.446.245l5.199 8.389a2.89 2.89 0 0 0 2.446 1.369c.992 0 1.931-.52 2.466-1.369l5.199-8.389a94 94 0 0 0 2.446-.245l6.728 7.224a2.88 2.88 0 0 0 2.676.864a2.87 2.87 0 0 0 2.14-1.822l3.441-9.23c.798-.229 1.592-.474 2.389-.724l7.989 5.752a2.885 2.885 0 0 0 4.537-1.894l1.587-9.727c.734-.381 1.46-.776 2.179-1.172l8.964 4.09a2.89 2.89 0 0 0 4.092-2.727l-.344-9.88a80 80 0 0 0 1.894-1.556l9.613 2.255a2.89 2.89 0 0 0 2.715-.768a2.87 2.87 0 0 0 .77-2.695l-2.256-9.613a76 76 0 0 0 1.556-1.895l9.882.345a2.87 2.87 0 0 0 2.503-1.282a2.88 2.88 0 0 0 .226-2.809l-4.09-8.963q.6-1.086 1.17-2.179l9.728-1.582a2.86 2.86 0 0 0 2.198-1.747a2.88 2.88 0 0 0-.325-2.79l-5.753-7.988c.249-.79.491-1.583.723-2.389l9.231-3.44a2.88 2.88 0 0 0 1.822-2.141a2.88 2.88 0 0 0-.864-2.675l-7.225-6.727q.132-1.22.239-2.446l8.391-5.198a2.88 2.88 0 0 0 1.368-2.447c0-.991-.516-1.93-1.367-2.465zm-56.192 69.755c-3.211-.692-5.237-3.861-4.549-7.071a5.94 5.94 0 0 1 7.053-4.568c3.211.686 5.256 3.86 4.568 7.071a5.94 5.94 0 0 1-7.053 4.568zm-2.848-19.302c-2.924-.627-5.81 1.234-6.422 4.166l-2.981 13.912c-9.194 4.167-19.496 6.498-30.199 6.498c-11.009 0-21.406-2.427-30.772-6.784l-2.981-13.913c-.627-2.924-3.498-4.797-6.422-4.166l-12.29 2.637a74 74 0 0 1-6.346-7.491h59.824c.677 0 1.128-.122 1.128-.738v-21.213c0-.615-.451-.737-1.128-.737h-17.488v-13.397h18.902c1.726 0 9.232.493 11.621 10.09c.751 2.943 2.408 12.537 3.536 15.614c1.124 3.44 5.696 10.32 10.57 10.32h29.816c.338 0 .699-.039 1.08-.107a75 75 0 0 1-6.766 7.95l-12.577-2.695zm-82.759 19.015a5.933 5.933 0 0 1-7.053-4.568c-.686-3.21 1.354-6.383 4.568-7.071a5.94 5.94 0 0 1 7.053 4.568c.686 3.211-1.355 6.383-4.568 7.071m-22.744-91.923a5.96 5.96 0 0 1-3.02 7.854a5.94 5.94 0 0 1-7.837-3.019c-1.337-2.997.023-6.517 3.02-7.855a5.94 5.94 0 0 1 7.837 3.02m-6.977 16.512l12.806-5.695c2.733-1.214 3.976-4.415 2.752-7.148l-2.637-5.962h10.359v46.63H57.501a73.3 73.3 0 0 1-2.79-20.066a74 74 0 0 1 .418-7.855zm56.193-4.53v-13.759h24.655c1.275 0 9.002 1.473 9.002 7.243c0 4.796-5.925 6.516-10.798 6.516H111.17zm89.639 12.384c0 1.827-.067 3.631-.2 5.428h-7.512c-.751 0-1.053.493-1.053 1.228v3.44c0 8.103-4.568 9.881-8.582 10.32c-3.822.43-8.046-1.597-8.562-3.937c-2.256-12.67-6.002-15.365-11.927-20.066c7.359-4.663 15.004-11.562 15.004-20.831c0-9.956-6.823-16.225-11.468-19.302c-6.536-4.3-13.761-5.16-15.711-5.16H73.277c10.53-11.733 24.847-20.066 40.901-23.124l9.156 9.594a5.415 5.415 0 0 0 7.664.176l10.244-9.785c21.407 3.994 39.564 17.334 50.076 35.737l-7.014 15.824c-1.21 2.733.025 5.944 2.752 7.148l13.494 6c.233 2.389.355 4.816.355 7.262zm-77.598-80.074a5.923 5.923 0 0 1 8.39.193a5.96 5.96 0 0 1-.197 8.409a5.92 5.92 0 0 1-8.39-.195a5.96 5.96 0 0 1 .197-8.409zm69.571 55.995a5.927 5.927 0 0 1 7.836-3.02a5.95 5.95 0 0 1 3.02 7.855a5.93 5.93 0 0 1-7.836 3.019a5.95 5.95 0 0 1-3.02-7.854"></path></g></svg>
 </TooltipTrigger>
  <TooltipContent className="bg-[#a4a4a4] font-semibold">
      <p>Backend On Rust</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
    <svg xmlns="http://www.w3.org/2000/svg" width="2.2em" height="2.2em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"></rect><path fill="#000" d="m128 34l95 164.853H33z"></path></g></svg>
    </TooltipTrigger>
  <TooltipContent className="bg-[#a4a4a4] font-semibold">
      <p>Deployed On Vercel!</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
    <svg xmlns="http://www.w3.org/2000/svg" width="2.2em" height="2.2em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"></rect><path fill="#000" d="M121.451 28.054c-.43.039-1.799.176-3.031.273c-28.406 2.561-55.014 17.889-71.867 41.447C37.17 82.873 31.167 97.731 28.9 113.47c-.801 5.494-.899 7.117-.899 14.565c0 7.449.098 9.072.9 14.565c5.434 37.556 32.16 69.111 68.406 80.802c6.491 2.092 13.333 3.519 21.114 4.379c3.031.332 16.129.332 19.16 0c13.431-1.486 24.809-4.809 36.031-10.538c1.72-.879 2.053-1.114 1.818-1.309c-.156-.118-7.488-9.952-16.285-21.838l-15.992-21.603l-20.04-29.658c-11.026-16.305-20.097-29.639-20.176-29.639c-.078-.019-.156 13.158-.195 29.248c-.059 28.172-.078 29.306-.43 29.97c-.508.958-.899 1.349-1.721 1.78c-.625.312-1.173.371-4.125.371h-3.382l-.9-.567a3.65 3.65 0 0 1-1.31-1.427l-.41-.88l.04-39.198l.058-39.218l.606-.763c.313-.41.978-.938 1.447-1.192c.801-.391 1.114-.43 4.496-.43c3.989 0 4.653.156 5.69 1.29c.293.313 11.143 16.657 24.125 36.344a89122 89122 0 0 0 39.452 59.765l15.836 23.989l.802-.528c7.096-4.614 14.604-11.183 20.547-18.026c12.649-14.526 20.802-32.238 23.539-51.124c.801-5.493.899-7.116.899-14.565s-.098-9.071-.899-14.565c-5.435-37.556-32.161-69.11-68.407-80.801c-6.393-2.073-13.196-3.5-20.821-4.36c-1.877-.196-14.8-.41-16.422-.254m40.938 60.489c.938.469 1.701 1.368 1.975 2.306c.156.509.195 11.379.156 35.875l-.059 35.152l-6.197-9.502l-6.217-9.501v-25.552c0-16.52.078-25.807.195-26.257c.313-1.094.997-1.954 1.936-2.463c.801-.41 1.095-.45 4.164-.45c2.894 0 3.402.04 4.047.392"></path></g></svg>
    </TooltipTrigger>
    <TooltipContent className="bg-[#a4a4a4] font-semibold">
      <p>Next JS 14</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

                     
                     </div>
               
               
               </div>
            </div>
            
            {/* Right Section */}
            <div className="w-[50%] flex bg-[#161616]">
       <div className="bg-[#161616] w-[150px] h-full flex flex-col items-center ">

       <div className="bg-[#232323] mt-auto flex flex-col items-center justify-between rounded-xl h-[416px] w-[70px]">

       <svg xmlns="http://www.w3.org/2000/svg" className="mt-4 text-[#a4a4a4]" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V5c0-1.1-.9-2-2-2m0 15l-5-2.18L7 18V5h10z"></path></svg>
       <svg xmlns="http://www.w3.org/2000/svg"  className="mt-5 text-[#a4a4a4]" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 19V5h6v14zm14 0h-6v-7h6zm0-9h-6V5h6z"></path></svg>
       <svg xmlns="http://www.w3.org/2000/svg"  className="mt-5 text-[#a4a4a4]"width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m6 18H6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h1v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V4h1c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1"></path></svg>
       <svg xmlns="http://www.w3.org/2000/svg" className="mt-5 text-[#a4a4a4]" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2-2.92l9.06-9.06l.92.92L5.92 19H5zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"></path></svg>
       <svg xmlns="http://www.w3.org/2000/svg" className="mt-5 text-[#a4a4a4]" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h4c.55 0 1-.45 1-1s-.45-1-1-1H4v-6h18V6c0-1.1-.9-2-2-2m0 4H4V6h16zm-5.07 11.17l-2.12-2.12a.996.996 0 1 0-1.41 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l5.66-5.66a.996.996 0 1 0-1.41-1.41z"></path></svg>
       <svg xmlns="http://www.w3.org/2000/svg" className="mt-5 text-[#a4a4a4]" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="currentColor" d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1m-1 12h-4V11h4z"></path><circle cx="12" cy="13" r="1" fill="currentColor"></circle><path fill="currentColor" d="m7.05 6.05l1.41 1.41a5.02 5.02 0 0 1 7.08 0l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05M12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0"></path></svg>
       <svg xmlns="http://www.w3.org/2000/svg" className="mb-5 mt-5 text-[#a4a4a4]" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.3 16.9c.4-.7.7-1.5.7-2.4c0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2l1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07A8 8 0 0 0 15 4.59V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8"></path></svg>
       </div>
        <Separator orientation="vertical"  className="h-[50px] bg-[#474747] text-[#474747]"  />
        <div className="flex flex-col items-center justify-center bg-[#232323] mb-10 rounded-xl h-[150px] w-[70px]">
<svg xmlns="http://www.w3.org/2000/svg" className=" text-[#a4a4a4]" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1zm9 5h-2c-.55 0-1 .45-1 1v.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V19c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V13c0-.55-.45-1-1-1m-1 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1m-1 10h-4v-8h4z"></path></svg>
</div>
       </div>
      <div className="bg-[#161616] w-[360px] flex flex-col items-center  h-[95%]">
        <div className="bg-[#232323] h-[330px] w-[360px] mt-auto rounded-lg  flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
        <p className="semibold">Unread Messages</p>
        <p className="w-[90%] text-[#747474] mt-5" style={{fontFamily:"extrabold"}}>Eliminate the time- consuming and wasteful habits with taking and processing notes by making your research and analysis availability everywhere you want it to be.
Processing notes by making your research and analysis availability.</p>
      <div className="flex items-center mt-6">
        <div className="h-[13px] w-[13px] rounded-full mr-3 bg-green-500"></div>
      <p className="text-green-500 mt-0.5" style={{fontFamily:"extrabold"}}>Completed</p>
      </div>
      
        </div>
         </div>
         <div className="gap-2.5 bg-[#232323] h-[270px] w-[360px]  rounded-lg mt-3 flex items-end justify-center">
       <div className="rounded-lg bg-[#282828] h-[230px] w-[150px]">
        <div className="w-[20px] h-full bg-[#303030] ml-[20%]"></div>
       </div>
       <div className="ml-2 rounded-lg bg-[#282828] h-[230px] w-[150px]">
       <div className="w-[20px] h-full bg-[#303030] ml-[20%]"></div>
       </div>
        
         </div>

        </div> 
       <div className="w-[400px] h-[95%]  flex flex-col items-center justify-end">
        <div className=" bg-[#232323] h-[300px] w-[360px]  rounded-lg flex items-center justify-center">
      
      <img className="w-full ml-6 mr-6" src="https://i.ibb.co/GdRBw9h/original-2-removebg-preview.png" alt="" />
        
         </div>

         <div className="gap-2.5 bg-[#232323] h-[500px] w-[360px]  rounded-lg mt-3 flex items-center  justify-center">
       <div className="border-[#474747] h-full w-[80%] rounded-lg  flex flex-col items-center  justify-center">
       <img src="https://i.ibb.co/zfZ2C5V/original-27571f855833b00c0d1abd5609ca7f3e-removebg-preview.png" className="h-[55px] -mt-5" alt="" />
       
       
       {/* <AuthComponent /> */}
       <LoginForm />

       </div>
        
  
         </div>
        
       </div>
            </div>
          </div>
        </div>
        
      </>
    );
  }
  Page.displayName = "Page"

  export default Page