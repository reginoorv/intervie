function CountdownTimer({ targetDate }) {
  try {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }, [targetDate]);

    const addLeadingZero = (num) => {
      return num < 10 ? `0${num}` : num;
    };

    if (!Object.keys(timeLeft).length) {
      return (
        <div data-name="countdown-expired">
          Time's up!
        </div>
      );
    }

    return (
      <div 
        data-name="countdown-timer"
        className="flex justify-center gap-4"
      >
        <div 
          data-name="countdown-days"
          className="text-center"
        >
          <span className="font-mono">{addLeadingZero(timeLeft.days)}</span>
          <span className="text-sm block">Days</span>
        </div>
        <div 
          data-name="countdown-hours"
          className="text-center"
        >
          <span className="font-mono">{addLeadingZero(timeLeft.hours)}</span>
          <span className="text-sm block">Hours</span>
        </div>
        <div 
          data-name="countdown-minutes"
          className="text-center"
        >
          <span className="font-mono">{addLeadingZero(timeLeft.minutes)}</span>
          <span className="text-sm block">Minutes</span>
        </div>
        <div 
          data-name="countdown-seconds"
          className="text-center"
        >
          <span className="font-mono">{addLeadingZero(timeLeft.seconds)}</span>
          <span className="text-sm block">Seconds</span>
        </div>
      </div>
    );
  } catch (error) {
    console.error('CountdownTimer component error:', error);
    reportError(error);
    return null;
  }
}
