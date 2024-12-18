import PropTypes from 'prop-types';

const DetailsPage = ({ title, icon, data }) => {
    return (
        <div className='group flex flex-col items-center text-center  w-full h-full lg:w-1/3 pl-9 pr-9  cursor-pointer'>
            <div className='bg-black h-24 w-26 text-center p-6'>{icon}</div>
            <h1 className=' text-lg text-black pt-3'>{title}</h1>
            <p className='text-black'>{data}</p>
        </div>    )
}
DetailsPage.propTypes = {
    title: PropTypes.string.isRequired, // Ensure title is required and a string
};
DetailsPage.propTypes = {
    icon: PropTypes.string.isRequired, // Ensure title is required and a string
};
DetailsPage.propTypes = {
    data: PropTypes.string.isRequired, // Ensure title is required and a string
};



export default DetailsPage;


