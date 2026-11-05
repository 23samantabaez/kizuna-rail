import { createConfirmation, getScheduleById, getTicketOptionsForRoute } from '../models/model.js';
import { yenToUsd } from '../includes/helpers.js';

async function bookingPage(req, res) {
    const { scheduleId } = req.params;
    const schedule = await getScheduleById(scheduleId);
    const ticketOptions = await getTicketOptionsForRoute(schedule.routeId, scheduleId);

    const ticketOptionsWithUsd = ticketOptions.map((ticket) => ({
    ...ticket,
    priceUsd: yenToUsd(ticket.price)
    }));

    const priceUsd = yenToUsd(schedule.price);

    res.render('routes/book', {
        title: 'Book Trip',
        schedule,
        ticketOptions: ticketOptionsWithUsd,
        priceUsd
    });
}

const processBookingRequest = async (req, res) => {
    const data = req.body;
    const confirmationNum = await createConfirmation(data);
    res.redirect(`/routes/confirmation/${confirmationNum}`);
};

export { bookingPage, processBookingRequest };