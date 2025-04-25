export default function SvgImage({ src }) {
    return (
        <img src={src} alt="imagen svg" width={30} height={30} className='hover:scale-110 cursor-pointer' />
    )
};