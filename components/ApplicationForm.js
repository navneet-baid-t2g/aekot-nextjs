"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const predefinedQuestions = [
    {
        id: uuidv4(),
        title: "Video Resume",
        description: "Please add a video resume. Record your video while you Introduce yourself",
        type: "video",
        maxDuration: 120,
        self_intro_video: true
    },
    {
        id: uuidv4(),
        title: "Why Aekot?",
        description: "Why should we hire you?",
        type: "text",
        maxLength: 1000
    },
    {
        id: uuidv4(),
        title: "Why Aekot?",
        description: "What do you know about Aekot and why should we hire you?",
        type: "text",
        maxLength: 1500
    },
    {
        id: uuidv4(),
        title: "Your LinkedIn Profile URL",
        description: "Please enter your LinkedIn profile URL",
        type: "link",
        maxLength: 100
    }
];


const ApplicationForm = ({ jobType, jobTitle, questions }) => {
    const [step, setStep] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_number: "",
        address: "",
        date_of_birth: "",
        resume: null,
        answers: (questions || predefinedQuestions).reduce((acc, question) => {
            acc[question.id] = question.type === 'video' ? null : '';
            return acc;
        }, {})
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [recording, setRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const videoChunksRef = useRef([]);
    const videoStreamRef = useRef(null);
    const timerRef = useRef(null);
    const [fingerprint, setFingerprint] = useState('');

    const [otpCountdown, setOtpCountdown] = useState(0);
    const [userOtp, setUserOtp] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [isOtpRequested, setIsOtpRequested] = useState(false);
    const fileInputRef = useRef(null);
    const captchaRef = useRef(null);
    const [otpStatus, setOtpStatus] = useState("idle");

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone_number: "",
        address: "",
        date_of_birth: "",
        resume: "",
        otp: ""
    });



    useEffect(() => {
        if (otpCountdown <= 0) {
            setIsOtpRequested(false);
            return;
        }

        const timer = setInterval(() => {
            setOtpCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [otpCountdown]);


    useEffect(() => {
        const loadFingerprint = async () => {
            const fp = await FingerprintJS.load();
            const result = await fp.get();
            setFingerprint(result.visitorId);
        };
        loadFingerprint();
    }, []);

    const validateName = (name) => {
        if (!name.trim()) return "Name is required";
        if (name.length < 2) return "Name must be at least 2 characters";
        return "";
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email) return "Email is required";
        if (!emailRegex.test(email)) return "Please enter a valid email address";
        return "";
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phone) return "Phone number is required";
        if (!phoneRegex.test(phone)) return "Please enter a valid phone number";
        return "";
    };

    const validateDateOfBirth = (dob) => {
        if (!dob) return "Date of birth is required";
        const birthDate = new Date(dob);
        const today = new Date();
        const minAgeDate = new Date();
        minAgeDate.setFullYear(today.getFullYear() - 18);

        if (birthDate > minAgeDate) return "You must be at least 18 years old";
        return "";
    };

    const validateAddress = (address) => {
        if (!address.trim()) return "Address is required";
        if (address.length < 10) return "Address must be at least 10 characters";
        return "";
    };

    const validateResume = (resume) => {
        if (!resume) return "Resume is required";
        if (resume.size > 5 * 1024 * 1024) return "File size must be less than 5MB";
        if (resume.type !== "application/pdf") return "Only PDF files are allowed";
        return "";
    };

    const handleSendOtp = async () => {
        captchaRef.current?.execute();

        const emailError = validateEmail(formData.email);
        if (emailError) {
            setErrors((prev) => ({ ...prev, email: emailError }));
            return;
        }
        setErrors((prev) => ({ ...prev, otp: "" }));
        if (otpCountdown > 0) return;

        try {
            setOtpStatus("sending");
            const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
            setOtp(newOtp);
            setIsOtpRequested(true);

            const payload = new URLSearchParams();
            payload.append("otp", newOtp);
            payload.append("email", formData.email);
            payload.append("emailExists", false);

            const response = await axios.post(
                `${import.meta.env.VITE_PUBLIC_API_BASE_URL}/apply/sendOTP`,
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_API_KEY}`,
                    },
                }
            );

            if (response.status === 200) {
                setOtpSent(true);
                setOtpCountdown(60);
                setOtpStatus("requested");
                setTimeout(() => setOtp(""), 15 * 60 * 1000);
            }
        } catch (error) {
            console.error("OTP Send Failed:", error);
            setOtpStatus("error");
        }
    };


    const handleVerifyOtp = () => {
        if (!userOtp || userOtp.length !== 6) {
            setErrors((prev) => ({ ...prev, otp: "Please enter a valid 6-digit OTP" }));
            return;
        }

        setOtpStatus("verifying");
        if (userOtp === otp) {
            setOtpVerified(true);
            setOtpCountdown(0);
            setIsOtpRequested(false);
            setErrors((prev) => ({ ...prev, otp: "" }));
            setOtpStatus("verified");
        } else {
            setErrors((prev) => ({ ...prev, otp: "Invalid OTP. Please try again." }));
            setOtpStatus("error");
        }
    };

    // Clean up resources
    useEffect(() => {
        return () => {
            if (videoStreamRef.current) {
                videoStreamRef.current.getTracks().forEach(track => track.stop());
            }
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    const isStepValid = () => {
        switch (step) {
            case 1:
                return (
                    formData.name &&
                    formData.email &&
                    formData.phone_number &&
                    formData.date_of_birth &&
                    formData.address &&
                    !errors.name &&
                    !errors.email &&
                    !errors.phone_number &&
                    !errors.date_of_birth &&
                    !errors.address
                );
            case 2:
                return otpVerified;
            case 3:
                return formData.resume && !errors.resume;
            case 4:
                return currentAnswer ||
                    (currentQuestionData.type === "text" && currentAnswer?.length > 0);
            default:
                return false;
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Validate on change
        let error = "";
        switch (name) {
            case "name":
                error = validateName(value);
                break;
            case "email":
                error = validateEmail(value);
                break;
            case "phone_number":
                error = validatePhone(value);
                break;
            case "date_of_birth":
                error = validateDateOfBirth(value);
                break;
            case "address":
                error = validateAddress(value);
                break;
        }

        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleAnswerChange = (questionId, value) => {
        setFormData(prev => ({
            ...prev,
            answers: {
                ...prev.answers,
                [questionId]: value
            }
        }));
    };

    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const error = validateResume(file);
            setErrors(prev => ({ ...prev, resume: error }));
            if (!error) {
                setFormData(prev => ({ ...prev, resume: file }));
            }
        }
    };

    const removeResume = () => {
        setFormData(prev => ({ ...prev, resume: null }));
        setErrors(prev => ({ ...prev, resume: "" }));
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const startRecording = async () => {
        try {
            setRecording(false);
            setRecordingTime(0);
            videoChunksRef.current = [];

            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error("Camera API not supported in this browser");
            }

            const constraints = {
                video: {
                    width: { ideal: 426 },
                    height: { ideal: 240 },
                    frameRate: { ideal: 10, max: 12 },
                    facingMode: "user"
                },
                audio: true
            };

            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            videoStreamRef.current = stream;

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.muted = true;
                videoRef.current.play().catch(e => console.error("Play error:", e));
            }

            const options = { mimeType: 'video/webm;codecs=vp8' };

            const mediaRecorder = new MediaRecorder(stream, options);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    videoChunksRef.current.push(e.data);
                }
            };

            mediaRecorder.onstop = () => {
                const videoBlob = new Blob(videoChunksRef.current, { type: 'video/webm' });
                handleAnswerChange(currentQuestionData.id, videoBlob);

                if (videoStreamRef.current) {
                    videoStreamRef.current.getTracks().forEach(track => track.stop());
                }


                videoStreamRef.current = null;
                mediaRecorderRef.current = null;
                clearInterval(timerRef.current);
                setRecording(false);
            };

            mediaRecorder.start(100);
            setRecording(true);

            timerRef.current = setInterval(() => {
                setRecordingTime(prev => {
                    const newTime = prev + 1;
                    if (newTime >= currentQuestionData.maxDuration) {
                        stopRecording();
                    }
                    return newTime;
                });
            }, 1000);
        } catch (err) {
            console.error("Camera Error:", err);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
        }
        if (videoStreamRef.current) {
            videoStreamRef.current.getTracks().forEach(track => track.stop());
        }
        clearInterval(timerRef.current);
        setRecording(false);
    };


    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    const nextQuestion = () => setCurrentQuestion(currentQuestion + 1);
    const prevQuestion = () => setCurrentQuestion(currentQuestion - 1);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        if (!fingerprint) {
            alert("Fingerprint not ready. Please try again.");
            return;
        }

        try {
            const formDataToSend = new FormData();

            formDataToSend.append("name", formData.name);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("phone_number", formData.phone_number);
            formDataToSend.append("address", formData.address);
            formDataToSend.append("date_of_birth", formData.date_of_birth);
            formDataToSend.append("applied_for", jobType);
            formDataToSend.append("fingerprint", fingerprint);



            formDataToSend.append("resume", formData.resume);

            const questionsToSubmit = questions?.length ? questions : predefinedQuestions;

            questionsToSubmit.forEach((question) => {
                const answer = formData.answers[question.id];
                if (question.type === "video" && answer instanceof Blob) {
                    formDataToSend.append("videos", answer, `answer_${question.id}.webm`);
                }
            });

            formDataToSend.append("questions", JSON.stringify(questionsToSubmit));

            const nonVideoAnswers = questionsToSubmit
                .filter(q => q.type !== "video")
                .map(q => ({
                    questionId: q.id,
                    questionText: q.title,
                    answer: formData.answers[q.id],
                    type: q.type
                }));

            formDataToSend.append("answers", JSON.stringify(nonVideoAnswers));

            const res = await fetch(`${import.meta.env.VITE_PUBLIC_API_BASE_URL}/apply`, {
                method: "POST",
                body: formDataToSend,
                headers: {
                    "x-fingerprint": fingerprint,
                    Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_API_KEY}`,

                },
            });

            if (!res.ok) throw new Error("Application failed");

            setSuccess(true);
        } catch (err) {
            console.error("Submission failed:", err);
            alert("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };




    useEffect(() => {
        const checkPermissions = async () => {
            try {
                const cameraPerm = await navigator.permissions.query({ name: 'camera' });
                const micPerm = await navigator.permissions.query({ name: 'microphone' });

                console.log('Camera permission:', cameraPerm.state);
                console.log('Microphone permission:', micPerm.state);

                if (cameraPerm.state === 'denied' || micPerm.state === 'denied') {
                    alert("Please reset camera/microphone permissions in your browser settings");
                }
            } catch (err) {
                console.log("Permission API not supported", err);
            }
        };

        checkPermissions();
    }, []);

    const questionsToUse = questions?.length ? questions : predefinedQuestions;
    const currentQuestionData = questionsToUse[currentQuestion];
    const currentAnswer = formData.answers[currentQuestionData.id];


    useEffect(() => {
        setCurrentQuestion(0);
    }, [questionsToUse]);


    if (success) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-md mx-auto text-center ">
                    <div className="flex justify-center mb-4">
                        <svg
                            className="w-20 h-20 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4 -4" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-green-700 mb-2">Application Submitted!</h2>
                    <p className="text-green-600 text-sm">
                        Thank you for applying. We’ll review your application and get back to you soon.
                    </p>
                </div>
            </div>
        );
    }



    return (
        <div className="max-w-2xl mx-auto min-h-[70vh] text-left">
            {/* Technical Support Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-sm">
                        <p className="text-blue-800 font-medium mb-1">Need help with your application?</p>
                        <p className="text-blue-700">
                            If you experience any technical issues while submitting your application, please email us at
                            <a
                                href="mailto:hr@aekot.com"
                                className="font-semibold text-blue-600 hover:text-blue-800 underline"
                            >
                                hr@aekot.com
                            </a>
                            with your details. We don&apos;t want to lose great talent due to technical glitches!
                        </p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="text-left">
                {step === 1 && (
                    <div className="grid gap-4">
                        <h2 className="text-xl font-bold mb-4">Personal Details</h2>

                        <div>
                            <label className="block font-semibold">Full Name *</label>
                            <input
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full border px-4 py-2 rounded bg-white ${errors.name ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label className="block font-semibold">Email *</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                disabled={otpVerified}
                                className={`w-full border px-4 py-2 rounded bg-white ${errors.email ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="block font-semibold">Phone Number *</label>
                            <input
                                name="phone_number"
                                required
                                value={formData.phone_number}
                                onChange={handleChange}
                                className={`w-full border px-4 py-2 rounded bg-white ${errors.phone_number ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.phone_number && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>
                            )}
                        </div>

                        <div>
                            <label className="block font-semibold">Date of Birth *</label>
                            <input
                                type="date"
                                name="date_of_birth"
                                required
                                value={formData.date_of_birth}
                                onChange={handleChange}
                                className={`w-full border px-4 py-2 rounded bg-white ${errors.date_of_birth ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.date_of_birth && (
                                <p className="text-red-500 text-sm mt-1">{errors.date_of_birth}</p>
                            )}
                        </div>

                        <div>
                            <label className="block font-semibold">Address *</label>
                            <textarea
                                name="address"
                                required
                                value={formData.address}
                                onChange={handleChange}
                                className={`w-full border px-4 py-2 rounded bg-white ${errors.address ? "border-red-500" : ""
                                    }`}
                                rows={3}
                            />
                            {errors.address && (
                                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={nextStep}
                                disabled={!isStepValid()}
                                className={`px-6 py-3 rounded hover:bg-opacity-80 ${!isStepValid() ? "bg-gray-400 cursor-not-allowed" : "bg-primary text-white font-semibold"
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div className="w-full mx-auto space-y-6 py-6">
                        {!otpVerified && !otpSent && (
                            <h2 className="w-full text-lg font-semibold text-center text-gray-700">
                                Please verify your email: {formData.email}
                            </h2>
                        )}

                        {/* Step 1: Send OTP */}
                        {!otpVerified && (
                            <>
                                {/* Step 2: Enter and Verify OTP */}
                                {otpSent && (
                                    <div className="space-y-6">
                                        <div>
                                            <label
                                                htmlFor="otp"
                                                className="block font-semibold text-gray-700 mb-2"
                                            >
                                                OTP <span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex gap-3">
                                                <input
                                                    id="otp"
                                                    type="text"
                                                    value={userOtp}
                                                    placeholder="Enter 6-digit OTP"
                                                    onChange={(e) => setUserOtp(e.target.value)}
                                                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                                                />
                                                <div className="flex gap-2">
                                                    <button
                                                        type="button"
                                                        className="bg-primary text-white font-semibold py-2 px-4 rounded-lg shadow transition
                               disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 hover:opacity-90"
                                                        onClick={handleVerifyOtp}
                                                        disabled={!userOtp || userOtp.length !== 6 || otpStatus === "verifying"}
                                                    >
                                                        {otpStatus === "verifying" ? "Verifying..." : "Verify"}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className={`bg-primary text-white font-semibold py-2 px-4 rounded-lg shadow transition ${otpCountdown > 0 || otpStatus === "sending"
                                                            ? "opacity-50 cursor-not-allowed"
                                                            : "hover:opacity-90"
                                                            }`}
                                                        onClick={handleSendOtp}
                                                        disabled={otpCountdown > 0 || otpStatus === "sending"}
                                                    >
                                                        {otpStatus === "sending"
                                                            ? "sending..."
                                                            : otpCountdown > 0
                                                                ? `Resend in ${otpCountdown}s`
                                                                : "Resend OTP"}

                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}

                        {otpStatus === "sending" && (
                            <div className="text-gray-600 text-sm text-center font-medium animate-pulse">
                                Sending OTP...
                            </div>
                        )}
                        {/* OTP Status Messages */}
                        {otpStatus === "requested" && (
                            <div className="text-blue-600 text-sm text-center font-medium">
                                OTP sent to {formData.email}. Please check your inbox.
                            </div>
                        )}

                        {otpStatus === "verifying" && (
                            <div className="text-gray-600 text-sm text-center font-medium animate-pulse">
                                Verifying OTP...
                            </div>
                        )}

                        {otpStatus === "verified" && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center font-medium">
                                Email verified successfully!
                            </div>
                        )}

                        {otpStatus === "error" && errors.otp && (
                            <div className="text-red-500 text-sm font-medium text-center">
                                {errors.otp}
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center pt-6">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="bg-white text-primary font-semibold border-2 border-primary px-6 py-2 rounded hover:bg-pink-50"
                            >
                                Back
                            </button>

                            {otpVerified && (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="px-6 py-2 rounded hover:bg-opacity-80 border-primary border-2 bg-primary text-white font-semibold"
                                >
                                    Next
                                </button>
                            )}

                            {!otpSent && (
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        className={`px-6 py-2 rounded hover:bg-opacity-80 ${isOtpRequested || otpStatus === "sending"
                                            ? "border-gray-400 border-2 bg-gray-400 cursor-not-allowed"
                                            : "border-primary border bg-primary text-white font-semibold"
                                            }`}
                                        onClick={handleSendOtp}
                                        disabled={isOtpRequested || errors.email || otpStatus === "sending"}
                                    >
                                        {otpStatus === "sending"
                                            ? "Sending..."
                                            : otpCountdown > 0
                                                ? `Resend in ${otpCountdown}s`
                                                : "Send OTP"}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}



                {step === 3 && (
                    <div className="grid gap-6">
                        <h2 className="text-xl font-bold mb-4">Upload Your Resume</h2>

                        <div>
                            <label className="block font-semibold">Resume (PDF only) *</label>

                            {!formData.resume ? (
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        accept=".pdf"
                                        onChange={handleResumeUpload}
                                        className="hidden"
                                        id="resume-upload"
                                    />
                                    <label
                                        htmlFor="resume-upload"
                                        className="cursor-pointer bg-primary text-white px-4 py-2 rounded hover:bg-opacity-80 inline-block"
                                    >
                                        Select PDF File
                                    </label>
                                    <p className="text-sm text-gray-500 mt-2">Max file size: 5MB</p>
                                    {errors.resume && (
                                        <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
                                    )}
                                </div>
                            ) : (
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <svg
                                                className="w-8 h-8 text-red-500 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <div>
                                                <p className="font-medium">{formData.resume.name}</p>
                                                <p className="text-sm text-gray-500">
                                                    {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={removeResume}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="bg-white text-primary font-semibold border-2 border-primary  px-6 py-2 rounded hover:bg-pink-50"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={nextStep}
                                disabled={!formData.resume || errors.resume}
                                className={`px-6 py-2 rounded hover:bg-opacity-80 ${!formData.resume || errors.resume
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-primary text-white font-semibold"
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="grid gap-6">
                        <h2 className="text-xl font-bold mb-4">
                            Question {currentQuestion + 1} of {questionsToUse.length}
                        </h2>
                        <div>
                            <label className="block mb-8 ">
                                <div className="mb-2">
                                    <div className="font-bold text-lg mb-1">{currentQuestionData.title}</div>
                                    <div className="text-gray-700">{currentQuestionData.description}</div>
                                </div>

                                {currentQuestionData.type === 'video' && (
                                    <span className="ml-2 text-sm font-normal text-gray-500">
                                        (Max {currentQuestionData.maxDuration} seconds)
                                    </span>
                                )}
                                {recording && (
                                    <span className="ml-2 text-sm font-normal text-red-500">
                                        Recording: {recordingTime}s
                                    </span>
                                )}
                            </label>

                            {currentQuestionData.type === "video" ? (
                                <div className="relative bg-black rounded-lg overflow-hidden aspect-video w-full">
                                    {!checkRecordingSupport().supported && (
                                        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
                                            <p>{checkRecordingSupport().message}</p>
                                            <button
                                                type="button"
                                                onClick={() => document.getElementById('upload-fallback').click()}
                                                className="mt-2 text-blue-500 underline"
                                            >
                                                Upload video file instead
                                            </button>
                                        </div>
                                    )}
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        muted
                                        playsInline
                                        className={`w-full h-full object-cover transition-opacity duration-300 ${recording ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                            }`}
                                        onLoadedMetadata={() => {
                                            videoRef.current?.play().catch((e) => {
                                                console.error("Playback failed", e);
                                            });
                                        }}
                                    />


                                    {recording && (
                                        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
                                            <button
                                                type="button"
                                                onClick={stopRecording}
                                                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-opacity-80 flex items-center"
                                            >
                                                <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                                                Stop Recording
                                            </button>
                                        </div>
                                    )}


                                    {!recording && !currentAnswer && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 bg-opacity-80">
                                            <button
                                                type="button"
                                                onClick={startRecording}
                                                className="bg-primary text-white px-6 py-3 rounded hover:bg-opacity-80 flex items-center"
                                            >
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                Start Recording
                                            </button>
                                            <p className="mt-4 text-sm text-gray-600">
                                                We&apos;ll ask for camera & microphone access.
                                                <button
                                                    type="button"
                                                    onClick={() => document.getElementById('upload-fallback').click()}
                                                    className="ml-1 text-blue-500 underline"
                                                >
                                                    Or upload a video file
                                                </button>
                                            </p>
                                        </div>
                                    )}


                                    {!recording && currentAnswer && (
                                        <>
                                            <div className="absolute inset-0">
                                                <video
                                                    controls
                                                    src={URL.createObjectURL(currentAnswer)}
                                                    className="w-full h-full object-contain bg-black"
                                                    onLoadStart={() => videoRef.current?.play()}
                                                />
                                            </div>
                                            <div className="absolute top-0 right-0 flex justify-center">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        handleAnswerChange(currentQuestionData.id, null);
                                                        if (videoRef.current) {
                                                            videoRef.current.srcObject = null;
                                                        }
                                                    }}
                                                    className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-opacity-80"
                                                >
                                                    Re-record Video
                                                </button>
                                            </div>
                                        </>
                                    )}

                                    <input
                                        id="upload-fallback"
                                        type="file"
                                        accept="video/*"
                                        className="hidden"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) handleAnswerChange(currentQuestionData.id, file);
                                        }}
                                    />
                                </div>


                            ) : currentQuestionData.type === "link" ? (
                                <>
                                    <input
                                        type="url"
                                        required
                                        className="w-full border px-4 py-2 rounded"
                                        value={currentAnswer || ""}
                                        onChange={(e) => handleAnswerChange(currentQuestionData.id, e.target.value)}
                                        placeholder="Paste your LinkedIn profile URL"
                                        maxLength={currentQuestionData.maxLength}
                                    />
                                    <div className="text-sm text-gray-500 text-right">
                                        {currentAnswer?.length || 0}/{currentQuestionData.maxLength} characters
                                    </div>
                                </>
                            ) : (
                                <>
                                    <textarea
                                        required
                                        className="w-full border px-4 py-2 rounded"
                                        value={currentAnswer || ""}
                                        onChange={(e) => handleAnswerChange(currentQuestionData.id, e.target.value)}
                                        rows={6}
                                        placeholder="Type your answer here..."
                                        maxLength={currentQuestionData.maxLength}
                                    />
                                    <div className="text-sm text-gray-500 text-right">
                                        {currentAnswer?.length || 0}/{currentQuestionData.maxLength} characters
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={currentQuestion === 0 ? prevStep : prevQuestion}
                                className="px-6 py-2 rounded  bg-white text-primary font-semibold border-2 border-primary  px-6 py-2 rounded hover:bg-pink-50"
                            >
                                {currentQuestion === 0 ? "Back" : "Previous"}
                            </button>
                            {currentQuestion < questionsToUse.length - 1 ? (
                                <button
                                    type="button"
                                    onClick={nextQuestion}
                                    disabled={!currentAnswer}
                                    className={`px-6 py-3 rounded hover:bg-opacity-80 ${!currentAnswer ? "bg-gray-400 cursor-not-allowed" : "bg-primary text-white font-semibold"
                                        }`}
                                >
                                    Next Question
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="bg-primary text-white px-6 py-3 rounded hover:bg-opacity-80"
                                >
                                    {submitting ? "Submitting..." : "Submit Application"}
                                </button>
                            )}

                        </div>

                    </div>

                )}
            </form>
        </div>
    );
};


const checkRecordingSupport = () => {
    // Basic feature detection
    const hasGetUserMedia = !!(
        navigator.mediaDevices?.getUserMedia ||
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia
    );

    const hasMediaRecorder = typeof MediaRecorder !== 'undefined';

    // Check for supported mime types
    let supportedFormats = [];
    if (hasMediaRecorder) {
        const testFormats = [
            'video/webm;codecs=vp9,opus',
            'video/webm;codecs=vp8,opus',
            'video/webm',
            'video/mp4;codecs=h264,aac'
        ];

        supportedFormats = testFormats.filter(format =>
            MediaRecorder.isTypeSupported(format)
        );
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    return {
        supported: hasGetUserMedia && hasMediaRecorder && supportedFormats.length > 0 && !isIOS,
        message: isIOS
            ? "iOS has limited recording support. Please upload a video file."
            : !hasGetUserMedia
                ? "Camera/microphone access not available"
                : !hasMediaRecorder
                    ? "Media recording not supported"
                    : supportedFormats.length === 0
                        ? "No supported video formats"
                        : "Ready to record"
    };
};

export default ApplicationForm;