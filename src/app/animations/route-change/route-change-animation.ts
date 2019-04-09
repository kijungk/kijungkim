import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';

export const routeChangeAnimation =
    trigger('routeChangeAnimations', [
        transition('Home => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Contact => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('About => Experiences', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('About => Skills', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('About => Projects', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('About => Contact', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('About => Home', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Experiences => Skills', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Experiences => Skills', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Experiences => Projects', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Experiences => Contact', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Experiences => About', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Experiences => Home', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Skills => Projects', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Skills => Contact', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Skills => Experiences', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Skills => About', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Skills => Home', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Projects => Contact', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Projects => Skills', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Projects => Experiences', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Projects => About', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ]),
        transition('Projects => Home', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)', opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)', opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)', opacity: '1' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)', opacity: '0' }))
                ], { optional: true }),
            ])
        ])
    ])
