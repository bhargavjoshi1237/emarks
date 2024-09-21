"use client"
import { useEffect } from 'react';
import { createSwapy } from 'swapy';
import VerticalNav from './verticalnav';
import { Folder } from 'lucide-react';
import Folders from './folders';

export default function HomeX() {
    useEffect(() => {
        const container = document.querySelector('.container');
        if (container) {
            const swapy = createSwapy(container, {
                animation: 'dynamic' // or spring or none
            });
            swapy.enable(true);
        } else {
            console.error('Element with class "container" not found.');
        }
    }, []);

    return (
        <>
           <div className="container flex flex-col ">
                    <div className="section-1" data-swapy-slot="r">
                        <div className="content-a" data-swapy-item="a">
                            <div className='h-[calc(100vh)-100px] w-[400px]'>
                            <VerticalNav />
                            </div>
                        </div>
                    </div>

                    <div className="section-2" data-swapy-slot="p">
                        <div className="content-b" data-swapy-item="b">
                            <div className='h-[calc(100vh)-100px] w-[400px] '>
                            <Folders />
                            </div>
                        </div>
                    </div>

                    <div className="section-3" data-swapy-slot="g">
                        <div className="content-c" data-swapy-item="c">
                        <div className='h-full w-[400px] '>
                        </div>
                           
                            <div className="handle" data-swapy-handle></div>

                        </div>
                    </div>
                   
                    
                </div>
        </>
    );
}