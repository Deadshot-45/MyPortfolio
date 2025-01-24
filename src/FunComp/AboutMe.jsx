import { FaDownload } from 'react-icons/fa6'

const AboutMe = () => {
  return (
    <div className="m-6 max-xsm:py-6 w-full flex items-center justify-center py-16 rounded-3xl bg-[#121214]">
        <div className="w-[80%] max-xsm:w-[90%] flex flex-col gap-6 items-center justify-center">
          <h1 className="text-3xl font-semibold max-xsm:text-2xl text-white">About Me</h1>
          <p className="text-center max-xsm:text-[12px] max-xsm:leading-6">
          Reach out and let's make it happen ✨. I'm also available for
            full-time or Part-time opportunities to push the boundaries of
            design and deliver exceptional work.
          </p>
          <button className="flex gap-2 p-2 px-4 rounded-lg shadow-[0_0_1px_#aaa] border-none text-sm font-semibold hover:bg-orange-700 bg-orange-600">
          <a href="mailto:mayanksahu8179@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send an email to mayanksahu8179@gmail.com">
        Let's Talk
      </a>
      <FaDownload />
          </button>
        </div>
      </div>
  )
}

export default AboutMe