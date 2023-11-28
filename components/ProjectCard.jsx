import { CodeIcon, BeakerIcon } from '@heroicons/react/outline';

const ProjectCard = ({ project, displayRequirements, setDisplayRequirements, index }) => (
    <div className='relative bg-helius-orange rounded-lg'>
        <div key={project.id} className='font-mono text-sm rounded-lg h-60 p-5 bg-[#2a302f] col-span-1  flex flex-col justify-between transition-all duration-200 hover:translate-x-1 hover:translate-y-1'>
            <div className='flex justify-between text-xl'>
                <div>
                    <BeakerIcon />
                    <h2 className='text-helius-orange font-extrabold'>
                        {index < 10 ? `0${index + 1}` : index + 1}
                    </h2>
                </div>
                <span className='font-light italic tracking-wide'>{project.title}</span>
            </div>
            <div>
                <p>{project.description}</p>
            </div>
            <div className='mt-8 font-semibold flex justify-between'>
                <div>
                    <a href={project.href.finished} className='bg-zinc-300 text-black rounded-full px-4 py-1 transition-all duration-200 border-2 border-transparent hover:border-[#80ebff] hover:bg-transparent hover:text-white'>
                        preview
                    </a>
                    <a href={project.href.starter} className='ml-4 bg-helius-orange rounded-full px-4 py-1 transition-all duration-200 border-2 border-transparent hover:border-[#eb54bc] hover:bg-transparent'>
                        starter
                    </a>
                </div>
                <div>
                    <button
                        className='flex items-center hover:text-[#bfaef7] transition-all duration-200 tracking-wide'
                        onClick={() => setDisplayRequirements(!displayRequirements)}
                    >
                        requirements
                        <CodeIcon width='25px' className='pl-1' />
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default ProjectCard;
