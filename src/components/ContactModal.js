import Modal from 'react-modal';

Modal.setAppElement('#__next');

const ContactModal = ({
	isOpen,
	setIsOpen,
	header = 'Notification',
	message,
}) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={() => setIsOpen(false)}
			style={{
				content: {
					top: '50%',
					left: '50%',
					right: 'auto',
					bottom: 'auto',
					marginRight: '-50%',
					transform: 'translate(-50%, -50%)',
				},
			}}
		>
			<h3>{header}</h3>
			<p>{message}</p>
			<button onClick={() => setIsOpen(false)}>Confirm</button>
			<button onClick={() => setIsOpen(false)}>Contact</button>
		</Modal>
	);
};

export default ContactModal;
