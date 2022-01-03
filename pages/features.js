import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'
import CallToAction from '/components/CallToAction.js';

const transferFeatures = [
    {
        id: 1,
        name: 'Competitive exchange rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        id: 2,
        name: 'No hidden fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        id: 3,
        name: 'Transfers are instant',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: LightningBoltIcon,
    },
]
const communicationFeatures = [
    {
        id: 1,
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AnnotationIcon,
    },
    {
        id: 2,
        name: 'Reminder emails',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: MailIcon,
    },
]


export default function Example() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div class="relative bg-sky-900">
                <div class="absolute inset-0">
                    <img class="w-full h-full object-cover" src="features.jpg" alt="" />
                    <div class="absolute inset-0 bg-sky-900 mix-blend-multiply" aria-hidden="true"></div>
                </div>
                <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <p class="mt-6 text-xl text-indigo-100 max-w-3xl tracking-widest">FEATURES</p>
                    <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Unlock Your Brand's Maximum Potential</h1>
                    <p class="mt-6 text-xl text-indigo-100 max-w-3xl">Tailor GetReviews to fit your brand's needs with our suite of features</p>
                </div>
            </div>

            <div class="overflow-hidden lg:py-16">
                <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                        <defs>
                            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                    </svg>

                    <div class="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div class="relative">
                            <h2 class="text-4xl font-extrabold text-sky-500 tracking-tight sm:text-4xl">
                                Collect Reviews on Multiple Marketplaces
                            </h2>
                            <p class="mt-3 text-lg text-gray-900">
                                Generate reviews on the marketplaces that matter most to your business with GetReviews.ai's intelligent review generation methods.
                            </p>

                        </div>

                        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                            <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
                                <defs>
                                    <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                            </svg>
                            <img class="relative mx-auto" width="600" src="features_marketplaces.svg" alt="" />
                        </div>
                    </div>

                    <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                        <defs>
                            <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                    </svg>

                    <div class="relative mt-12 sm:mt-16 lg:mt-24">
                        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div class="lg:col-start-2">
                                <h3 class="text-4xl font-extrabold text-sky-500 tracking-tight sm:text-4xl">
                                    Order Number Validation
                                </h3>
                                <p class="mt-3 text-lg text-gray-900">
                                    Ensure only valid order numbers are accessing your review flow and claiming their free gift with GetReviews.ai's order number validation feature.
                                </p>
                            </div>

                            <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                                <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
                                    <defs>
                                        <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                                </svg>
                                <img class="relative mx-auto" width="490" src="features_order_number.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-hidden lg:pt-16 lg:pb-16">
                <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                        <defs>
                            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                    </svg>

                    <div class="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div class="relative">
                            <h2 class="text-4xl font-extrabold text-sky-500 tracking-tight sm:text-4xl">
                                Custom Domain Support
                            </h2>
                            <p class="mt-3 text-lg text-gray-900">
                                Embed your GetReviews survey wherever you would like with GetReviews.ai's custom domain support.
                            </p>

                        </div>

                        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                            <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
                                <defs>
                                    <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                            </svg>
                            <img class="relative mx-auto" width="490" src="features_custom_domain.svg" alt="" />
                        </div>
                    </div>

                    <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                        <defs>
                            <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                    </svg>

                    <div class="relative mt-12 sm:mt-16 lg:mt-24">
                        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div class="lg:col-start-2">
                                <h3 class="text-4xl font-extrabold text-sky-500 tracking-tight sm:text-4xl">
                                    Time-saving Integrations
                                </h3>
                                <p class="mt-3 text-lg text-gray-900">
                                    Pass data through to external apps of your choosing using our suite of integrations revolving around data transfer/protocols.
                                </p>
                            </div>

                            <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                                <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
                                    <defs>
                                        <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                                </svg>
                                <img class="relative mx-auto" width="600" src="Integration_Partners.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CallToAction />
        </div>

    )
}
