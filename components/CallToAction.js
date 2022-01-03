import React, { Component } from 'react';

class CallToAction extends Component {
    render() {
        return (
            <div class="bg-sky-700">
                <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 class="text-5xl font-extrabold text-white sm:text-5xl">
                        <span class="block">Ready to GetReviews?</span>
                    </h2>
                    <p class="mt-4 text-lg leading-6 text-indigo-200">Sign up for a free 30-day trial! (No credit card required)</p>
                    <a href="#" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 shadow-sm hover:bg-orange-700 sm:w-auto">
                        Start Free Trial
                    </a>
                </div>
            </div>
        )
    }
}

export default CallToAction;